import {sql} from "@vercel/postgres";

export async function findSimilarDocuments(embedding: number[], limit = 5) {
    const result = await sql`
    SELECT id, title, content, 
           embeddings <-> ${JSON.stringify(embedding)}::vector AS similarity
    FROM documents
    ORDER BY similarity ASC
    LIMIT ${limit}
  `;
    return result.rows;
}