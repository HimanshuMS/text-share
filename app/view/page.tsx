'use client';

import { useState } from "react";
import Link from "next/link";

export default function UploaderPage() {
  const [text, setText] = useState("");

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">Text Sharer</h1>
      <input
        className="w-22 mx-12 p-2 border rounded text-black"
        placeholder="Enter code"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded"
        href={`/view/${text}`}
      >
        View
      </Link>
    </div>
  );
}
