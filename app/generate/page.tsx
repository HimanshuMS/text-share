'use client';

import { useState, useEffect } from "react";

export default function UploaderPage() {
  const [text, setText] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  const handleTextSubmit = async () => {
    if (!text.trim()) return;

    const res = await fetch("/api/save-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setId(data.id);
    setLink(`${data.id}`);
  };

  // Notify the server to delete text when the window is closed
  useEffect(() => {
    const handleBeforeUnload = async () => {
      if (id) {
        await fetch(`/api/delete-text?id=${id}`, { method: "DELETE" });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [id]);

  return (
    <div className="space-y-4 h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">Text Sharer</h1>
      <textarea
        className="w-full mx-12 p-2 border rounded text-black"
        rows={4}
        placeholder="Enter text to share"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleTextSubmit}
      >
        Generate Code for Text
      </button>
      {link && (
        <div className="bg-gray-100 rounded text-black py-2 px-4">
          <p>Your Code: {link}</p>
        </div>
      )}
    </div>
  );
}
