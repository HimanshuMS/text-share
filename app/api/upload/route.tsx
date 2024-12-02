import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { generateShortLink } from "@/app/utils/urlShortner";

const UPLOAD_DIR = path.join(process.cwd(), "uploads");

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as Blob | null;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const id = generateShortLink();
  const filePath = path.join(UPLOAD_DIR, id);

  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(filePath, buffer);

  return NextResponse.json({ id });
}