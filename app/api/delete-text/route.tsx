// /app/api/delete-text/route.ts
import { NextResponse } from "next/server";
import { deleteText } from "../store";

export async function DELETE(req: Request) {
  const id = new URL(req.url).searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  deleteText(id);
  return NextResponse.json({ success: true });
}
