"use client";

import { useEditorStore } from "@opencut/editor-core";
import { useMemo, useState } from "react";

export function PreviewPlayer() {
  const project = useEditorStore((state) => state.project);
  const [isPlaying, setIsPlaying] = useState(false);

  const source = useMemo(() => project?.assets[0]?.url ?? undefined, [project]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {source ? (
        <video
          src={source}
          controls
          className="h-[360px] w-full max-w-[640px] rounded-xl border border-slate-200 bg-black object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      ) : (
        <div className="flex h-[360px] w-full max-w-[640px] items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-200 to-slate-100 text-slate-500">
          Preview Player
        </div>
      )}

      <button
        type="button"
        className="absolute bottom-6 right-6 rounded-full bg-[#00B8DB] px-3 py-2 text-xs font-medium text-white shadow-lg"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
