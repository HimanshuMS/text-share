'use client';

import { useState } from "react";
import Link from "next/link";

export default function UploaderPage() {
  const [text, setText] = useState("");

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-black">Text Sharer</h1>
      <input
        className="w-22 mx-12 p-2 border rounded text-black text-center text-2xl focus:outline-none font-black"
        placeholder="Enter code"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <Link
        className="px-6 py-2 bg-white text-slate-950 text-2xl rounded-3xl hover:bg-yellow-400 duration-300 ease-in-out"
        href={`/view/${text}`}
      >
        View
      </Link>
    </div>
  );
}
