# IndexNow Integration

This document outlines the production-ready integration of the Microsoft IndexNow protocol for automatic search engine notification.

## What is IndexNow?
IndexNow is a protocol that allows websites to easily notify search engines whenever their website content is updated, created, or deleted. Unlike traditional sitemaps which rely on search engine crawlers polling the site periodically, IndexNow uses a "ping" mechanism to inform search engines immediately, leading to faster indexing of new content.

## Architecture

Our integration uses a highly modular and decoupled architecture to support Vercel deployments securely and reliably.

**The Recommended Production Flow:**
```text
Git Push
      ↓
GitHub
      ↓
Vercel Build
      ↓
Vercel Deployment Success
      ↓
IndexNow API (via scripts/indexnow.js)
      ↓
Bing + IndexNow Search Engines Notified
```

### Why this architecture?
Vercel deployments are asynchronous. If a GitHub Action executes immediately on `push`, it might send the IndexNow ping *before* Vercel finishes deploying the live site. Therefore, `scripts/indexnow.js` is designed to be executed via a manual trigger, Vercel Deploy Hooks, or local execution, ensuring the deployment is actually live when the search engines verify the URLs.

## Folder Structure

- `public/<INDEXNOW_KEY>.txt`: The ownership verification file hosted at the root domain.
- `scripts/indexnow.js`: The standalone ES Module responsible for parsing the sitemap, deduplicating URLs, and hitting the IndexNow API.
- `.env.local`: Stores the secure 32-character hexadecimal key (ignored in git).
- `.github/workflows/indexnow.yml`: A GitHub Action provided as a manual/fallback trigger for development.

## How Automation Works

1. **Dynamic Sitemap Parsing:** The script (`indexnow.js`) reads `public/sitemap.xml` directly. It uses regex to extract all `<loc>` tags automatically. You **never** need to hardcode URLs in the script.
2. **Validation & Deduplication:** The script ensures all URLs belong to the host (`thenameisbhagavan.vercel.app`) and removes duplicates.
3. **Payload Construction:** A JSON payload is constructed according to the Microsoft spec containing the host, key, key location, and the array of up to 10,000 URLs.
4. **Submission:** A `POST` request is fired to `https://api.indexnow.org/indexnow`.

## Regenerating the Key

If you ever need to rotate or regenerate the IndexNow key:
1. Generate a new 32-character hexadecimal string.
2. Create a new file in `public/` named exactly `<NEW_KEY>.txt` containing only the new key with no newlines.
3. Delete the old key file from `public/`.
4. Update `.env.local` and your CI/CD secrets (e.g., GitHub Secrets, Vercel Environment Variables) with the new `INDEXNOW_KEY`.
5. Deploy the changes.

## Troubleshooting

- **Error 403 (Forbidden):** Ensure the `public/<KEY>.txt` is actually reachable at `https://thenameisbhagavan.vercel.app/<KEY>.txt` and contains the exact key string with no extra whitespace.
- **Error 422 (Unprocessable Entity):** Ensure your JSON payload is structured correctly and all URLs match the host domain.
- **Missing URLs:** Ensure `scripts/generate-sitemap.js` runs successfully during the build step and populates `public/sitemap.xml` before `npm run indexnow` is executed.
