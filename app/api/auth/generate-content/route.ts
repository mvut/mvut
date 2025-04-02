import { generateText } from "@/lib/gemini";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { topic } = req.body;
    const content = await generateText(
        `Generate a detailed lesson plan on ${topic}. Include key concepts, examples, and a quiz.`
    );
    res.status(200).json({ content });
}