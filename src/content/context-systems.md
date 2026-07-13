## Designing AI Systems That Remember Context

One of the defining challenges of modern AI engineering is building systems that don't suffer from "goldfish memory." Standard LLM API calls are inherently stateless; each interaction is isolated. To build true agents or personal assistants, you must engineer a robust context-retention architecture.

### The Problem with Long Context Windows

While models like Gemini 1.5 Pro offer massive 1M+ token context windows, simply stuffing the entire conversation history into the prompt is inefficient and costly. 
1. **Latency**: Processing huge prompts takes time.
2. **Cost**: You are paying for those tokens on every single turn.
3. **Lost in the Middle**: LLMs often struggle to retrieve specific facts buried in the middle of massive prompts.

### Enter RAG (Retrieval-Augmented Generation)

The solution is semantic memory through RAG.

1. **Chunking and Embedding**: Conversations, documents, and facts are broken down into semantic chunks and passed through an embedding model (e.g., `text-embedding-3`).
2. **Vector Database**: These dense vectors are stored in a specialized database like Pinecone, Milvus, or Supabase pgvector.
3. **Retrieval**: When a user asks a question, the system embeds the query and performs a cosine similarity search against the database, retrieving only the top-K most relevant chunks.

### Implementation Blueprint

```python
from langchain.vectorstores import SupabaseVectorStore
from langchain.embeddings import OpenAIEmbeddings

# 1. Embed the query
embeddings = OpenAIEmbeddings()
query_vector = embeddings.embed_query(user_input)

# 2. Retrieve relevant history
relevant_context = db.similarity_search_by_vector(query_vector, k=5)

# 3. Inject into prompt
system_prompt = f"""
You are an intelligent assistant. 
Use the following relevant memory to answer the user:
{relevant_context}
"""
```

### Entity Extraction & Knowledge Graphs

For advanced systems, vector search isn't enough. I often implement a hybrid approach:
- **Vector Search** for semantic, unstructured conversation history.
- **Knowledge Graphs** (using Neo4j or similar) for hard entity relationships (e.g., User -> works at -> Apple). 

By combining these, the AI system achieves both fluid conversational memory and rigid factual accuracy.
