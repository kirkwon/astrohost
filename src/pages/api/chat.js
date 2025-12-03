import { ChatOpenAI } from "@langchain/openai";
import { Document } from 'langchain/document'; // Reverted import path
import { loadQAStuffChain } from 'langchain/chains'; // Reverted import path
import { promises as fs } from 'fs';
import path from 'path';

export const POST = async ({ request }) => {
  const { query } = await request.json();

  try {
    const llm = new ChatOpenAI({
        openAIApiKey: import.meta.env.OPENAI_API_KEY,
        modelName: "gpt-3.5-turbo",
      });
    const chain = loadQAStuffChain(llm);

    const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
    const filenames = await fs.readdir(contentDir);
    const blogPosts = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(contentDir, filename);
        const content = await fs.readFile(filePath, 'utf-8');
        return new Document({ pageContent: content });
      })
    );

    const result = await chain.call({
      input_documents: blogPosts,
      question: query,
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ text: 'Sorry, I encountered an error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
