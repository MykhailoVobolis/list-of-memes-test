import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db', 'memes.json');

export async function PATCH(request) {
  try {
    const updatedMeme = await request.json();

    const file = await fs.readFile(dbPath, 'utf-8');
    const data = JSON.parse(file);

    const updatedData = data.map((meme) =>
      meme.id === updatedMeme.id
        ? {
            ...meme,
            name: updatedMeme.name,
            image: updatedMeme.image,
            likes: updatedMeme.likes,
          }
        : meme,
    );

    await fs.writeFile(dbPath, JSON.stringify(updatedData, null, 2), 'utf-8');

    return NextResponse.json(updatedMeme);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error updating meme' }, { status: 500 });
  }
}
