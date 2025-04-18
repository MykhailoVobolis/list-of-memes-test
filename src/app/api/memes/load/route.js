import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db', 'memes.json');

export async function GET() {
  try {
    const file = await fs.readFile(dbPath, 'utf-8');
    const data = JSON.parse(file);
    if (data.length) {
      return NextResponse.json({ fromCache: true, memes: data });
    }

    return NextResponse.json(
      { error: 'Failed to load memes' },
      { status: 500 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error loading memes' }, { status: 500 });
  }
}
