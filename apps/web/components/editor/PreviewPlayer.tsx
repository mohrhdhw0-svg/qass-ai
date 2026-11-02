"use client";

import { useEditorStore, useSelectionStore } from "@opencut/editor-core";
import { useMemo } from "react";
import { useRenderRuntime } from "../../lib/render/use-render-runtime";

export function PreviewPlayer() {
  const project = useEditorStore((state) => state.project);
  const selection = useSelectionStore((state) => state.selection);
  const source = useMemo(() => project?.assets[0]?.url ?? undefined, [project]);
  const { frames, output } = useRenderRuntime(source);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {source ? (
        <video
          src={source}
          controls
          className="h-[360px] w-full max-w-[640px] rounded-xl border border-slate-200 bg-black object-cover"
        />
      ) : (
        <div className="flex h-[360px] w-full max-w-[640px] items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-200 to-slate-100 text-slate-500">
          Preview Player
        </div>
      )}

      <div className="absolute bottom-6 left-6 rounded-md border border-slate-200 bg-white/80 px-2 py-1 text-[10px] text-slate-600">
        Frames: {frames.length}
      </div>

      {output && (
        <div className="absolute bottom-6 right-24 rounded-md border border-slate-200 bg-white/80 px-2 py-1 text-[10px] text-slate-600">
          Export: {output}
        </div>
      )}

      {selection.clipId && (
        <div className="absolute bottom-6 right-6 rounded-md border border-slate-200 bg-white/80 px-2 py-1 text-[10px] text-slate-600">
          Selected clip
        </div>
      )}
    </div>
  );
}
