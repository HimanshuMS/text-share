'use client';

import Link from "next/link";

export default function UploaderPage() {

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-black">Text Sharer</h1>
      <Link className="px-6 py-2 bg-white text-slate-950 text-2xl rounded-3xl hover:rounded-none duration-300 ease-in-out " href="/generate">Share</Link>
      <p className="font-thin">OR</p>
      <Link className="px-6 py-2 bg-white text-slate-950 text-2xl rounded-3xl hover:rounded-none duration-300 ease-in-out" href="/view">View</Link>
    </div>
  );
}
