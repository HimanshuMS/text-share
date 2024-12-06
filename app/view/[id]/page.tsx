// /app/view/[id]/page.tsx
'use client';

import { useEffect, useState } from "react";

export default function ViewerPage({ params: asyncParams }: { params: Promise<{ id: string }> }) {
  const [text, setText] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [show, setShow] = useState<string | null>(null)
  

  // Unwrap params using useEffect
  useEffect(() => {
    asyncParams.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [asyncParams]);

  // Fetch the text based on the unwrapped ID
  useEffect(() => {
    if (!id) return;

    const fetchText = async () => {
      const res = await fetch(`/api/get-text?id=${id}`);
      const data = await res.json();
      if (data.text) {
        setText(data.text);
      } else {
        setText("Text not found or no longer available.");
      }
    };

    fetchText();
  }, [id]);

  if (!text) {
    return <div>Loading...</div>;
  }

  if (show) {
    setTimeout(() => {
      setShow(null)
    }, 3000)
  }

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-8 md:p-24">
      <h1 className="text-6xl font-black">Text Sharer</h1>
      <textarea className="w-full p-6 border rounded-3xl text-black active:rounded-none focus:outline-none duration-300 ease-in-out" readOnly defaultValue={text}></textarea>
      {text !== "Text not found or no longer available." && (
        <button
          onClick={() => {navigator.clipboard.writeText(text); setShow("Text is copied!")}}
          className="px-6 py-2 bg-white text-slate-950 text-2xl rounded-3xl hover:rounded-none duration-300 ease-in-out"
        >
          Copy Text
        </button>
      )}

      {show && (<p className="text-white text-xl">{show}</p>)}
    </div>
  );
}
