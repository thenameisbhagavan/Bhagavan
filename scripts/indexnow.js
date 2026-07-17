/**
 * IndexNow Automation Script
 * Parses the local sitemap.xml, extracts all URLs, and submits them to the IndexNow API.
 * This script is designed to be highly modular and can be triggered via GitHub Actions,
 * Vercel Deploy Hooks, or manually in the terminal.
 */

import fs from 'fs';
import path from 'path';

// --- Configuration ---
const HOSTNAME = 'thenameisbhagavan.vercel.app';
const API_URL = 'https://api.indexnow.org/indexnow';

/**
 * Loads environment variables from a local .env.local file if it exists.
 * Used for local testing without requiring the `dotenv` package.
 */
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        // Remove quotes if present
        value = value.replace(/(^['"]|['"]$)/g, '').trim();
        process.env[key] = value;
      }
    });
  }
}

/**
 * Parses the sitemap.xml and extracts all <loc> URLs.
 * 
 * @param {string} sitemapPath - Absolute path to the sitemap.xml file.
 * @returns {string[]} An array of extracted URLs.
 */
function extractUrlsFromSitemap(sitemapPath) {
  console.log('✔ Reading sitemap from:', sitemapPath);
  
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Sitemap not found at path: ${sitemapPath}`);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Use regex to match all <loc>...</loc> tags
  const regex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = regex.exec(sitemapContent)) !== null) {
    if (match[1]) {
      urls.push(match[1].trim());
    }
  }
  
  return urls;
}

/**
 * Validates and deduplicates an array of URLs.
 * Ensures the URLs belong to the expected host.
 * 
 * @param {string[]} urls - Array of parsed URLs.
 * @returns {string[]} An array of valid, unique URLs.
 */
function validateAndDeduplicateUrls(urls) {
  const uniqueUrls = [...new Set(urls)];
  const validUrls = uniqueUrls.filter(url => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname === HOSTNAME && (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:');
    } catch (e) {
      return false;
    }
  });
  
  return validUrls;
}

/**
 * Submits the URLs to the IndexNow API.
 * 
 * @param {string[]} urlList - The final list of validated URLs to submit.
 * @param {string} key - The secure IndexNow verification key.
 * @returns {Promise<boolean>} True if submission was successful, false otherwise.
 */
async function submitToIndexNow(urlList, key) {
  console.log('✔ Preparing IndexNow request for', urlList.length, 'URLs');
  
  const payload = {
    host: HOSTNAME,
    key: key,
    keyLocation: `https://${HOSTNAME}/${key}.txt`,
    urlList: urlList
  };

  console.log('✔ Sending request to', API_URL);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✔ Success: IndexNow API accepted the submission (HTTP ' + response.status + ').');
      return true;
    } else {
      const errorText = await response.text();
      console.error(`✖ Error: IndexNow API rejected the submission (HTTP ${response.status}). Details:`, errorText);
      return false;
    }
  } catch (error) {
    console.error('✖ Request Failed:', error.message);
    return false;
  }
}

/**
 * Main execution flow
 */
async function main() {
  try {
    // 1. Load environment and verify key
    loadEnv();
    const key = process.env.INDEXNOW_KEY;
    
    if (!key) {
      throw new Error('INDEXNOW_KEY environment variable is not set. Ensure .env.local is configured or passed via CI/CD secrets.');
    }

    // 2. Verify key file exists locally in public directory
    const keyFilePath = path.resolve(process.cwd(), 'public', `${key}.txt`);
    if (!fs.existsSync(keyFilePath)) {
      console.warn(`⚠ Warning: Verification key file not found at ${keyFilePath}. Ensure the file is generated before deployment.`);
    } else {
      console.log(`✔ Key file found at: public/${key}.txt`);
    }

    // 3. Extract and validate URLs
    const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
    const rawUrls = extractUrlsFromSitemap(sitemapPath);
    
    const validUrls = validateAndDeduplicateUrls(rawUrls);
    console.log(`✔ Found ${validUrls.length} valid and unique URLs.`);
    
    if (validUrls.length === 0) {
      throw new Error('No valid URLs found in the sitemap to submit.');
    }

    if (validUrls.length > 10000) {
      console.warn('⚠ Warning: IndexNow supports a maximum of 10,000 URLs per request. Truncating list.');
      validUrls.length = 10000;
    }

    // 4. Submit to IndexNow
    const success = await submitToIndexNow(validUrls, key);
    
    if (success) {
      console.log('\n========================================');
      console.log('  SUCCESS - BING & ENGINES NOTIFIED     ');
      console.log('========================================\n');
    } else {
      console.log('\n========================================');
      console.log('  FAILED - INDEXNOW SUBMISSION ERROR    ');
      console.log('========================================\n');
      process.exit(1);
    }

  } catch (error) {
    console.error('\n✖ Fatal Error:', error.message);
    process.exit(1);
  }
}

// Execute script
main();
