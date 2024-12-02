'use client';

import Link from "next/link";

export default function UploaderPage() {

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">Text Sharer</h1>
      <Link className="px-4 py-2 bg-blue-500 text-white rounded" href="/generate">Share</Link>
      <p>OR</p>
      <Link className="px-4 py-2 bg-blue-500 text-white rounded" href="/view">View</Link>
    </div>
  );
}
