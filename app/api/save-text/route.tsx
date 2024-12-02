import { NextResponse } from "next/server";
// import { randomUUID } from "crypto";
// import { promises as fs } from "fs";
// import path from "path";
import { saveText } from "../store";
import { generateShortLink } from "@/app/utils/urlShortner";

// const TEXT_DIR = path.join(process.cwd(), "texts");

// export async function POST(req: Request) {
//   const { text } = await req.json();
//   const id = generateShortLink();
//   // const id = "something"
//   const filePath = path.join(TEXT_DIR, id);

//   await fs.mkdir(TEXT_DIR, { recursive: true });
//   await fs.writeFile(filePath, text);

//   return NextResponse.json({ id });
// }

export async function POST(req: Request) {
  const { text } = await req.json();
  const id = generateShortLink();

  saveText(id, text);
  return NextResponse.json({ id });
}