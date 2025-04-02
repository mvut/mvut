import { generateEmbeddings } from "@/lib/gemini";
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { text, title } = req.body;

    try {
        // 1. Generate embeddings using Gemini
        const embedding = await generateEmbeddings(text);

        // 2. Store in Vercel PSQL with pgvector
        await sql`
      INSERT INTO documents (title, content, embeddings) 
      VALUES (${title}, ${text}, ${JSON.stringify(embedding)}::vector)
    `;

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error storing embedding:', error);
        res.status(500).json({ error: 'Failed to store embedding' });
    }
}