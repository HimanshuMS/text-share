// /app/api/get-text/route.ts
import { NextResponse } from "next/server";
import { getText } from "../store";

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const text = getText(id);
  if (text) {
    return NextResponse.json({ text });
  }

  return NextResponse.json({ error: "Text not found" }, { status: 404 });
}
