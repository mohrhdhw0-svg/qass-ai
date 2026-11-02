"use client";

const sampleCaptions = [
  { start: 0, end: 2, text: "Welcome to the story" },
  { start: 2, end: 5, text: "Now we start editing" },
  { start: 6, end: 9, text: "Add energy and polish" },
];

export function CaptionPanel() {
  const handleTranslate = async () => {
    const response = await fetch("http://localhost:8787/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "Welcome to the story", target: "fr" }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Translated caption:", data);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Captions</p>
        <button onClick={handleTranslate} className="rounded-md bg-[#00B8DB] px-2 py-1 text-xs text-white">
          Translate
        </button>
      </div>

      <div className="space-y-2">
        {sampleCaptions.map((caption, index) => (
          <div key={`${caption.start}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>{caption.start.toFixed(1)}s - {caption.end.toFixed(1)}s</span>
              <span>EN</span>
            </div>
            <div className="mt-2 text-sm text-slate-700">{caption.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
