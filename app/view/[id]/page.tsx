// /app/view/[id]/page.tsx
'use client';

import { useEffect, useState } from "react";

export default function ViewerPage({ params: asyncParams }: { params: Promise<{ id: string }> }) {
  const [text, setText] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

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

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-xl font-bold">Shared Text</h1>
      <textarea className="p-4 w-full bg-gray-100 rounded text-black" readOnly defaultValue={text}></textarea>
      {text !== "Text not found or no longer available." && (
        <button
          onClick={() => {navigator.clipboard.writeText(text); alert("Text Copied")}}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Copy Text
        </button>
      )}
    </div>
  );
}
