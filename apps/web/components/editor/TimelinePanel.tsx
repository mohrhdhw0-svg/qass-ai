"use client";

import { useEditorStore, useSelectionStore } from "@opencut/editor-core";
import { addMediaToProject } from "../../lib/project/add-media";

export function TimelinePanel({ project }: { project: any | null }) {
  const tracks = project?.tracks ?? [];
  const setSelection = useSelectionStore((state) => state.setSelection);
  const clearSelection = useSelectionStore((state) => state.clearSelection);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, trackId: string) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    Array.from(files).forEach((file) => addMediaToProject(file));
    setSelection({ clipId: null, trackId, type: "track" });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="text-sm font-medium text-slate-800">Timeline</div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-slate-200 px-2 py-1 text-xs">+ Track</button>
          <button className="rounded-md bg-[#00B8DB] px-2 py-1 text-xs text-white">Play</button>
        </div>
      </div>

      <div className="h-[420px] overflow-y-auto">
        {tracks.map((track: any) => (
          <div
            key={track.id}
            className="border-b border-slate-200 bg-white"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, track.id)}
          >
            <div className="flex h-24 items-center">
              <div className="w-28 border-r border-slate-200 px-3 py-2">
                <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{track.type}</div>
                <div className="mt-1 text-sm font-medium text-slate-800">{track.label}</div>
              </div>

              <div className="relative flex-1 h-full overflow-hidden bg-slate-50">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px)",
                    backgroundSize: "120px 100%",
                  }}
                />

                <div className="relative h-full">
                  {track.clips.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">
                      Drop media
                    </div>
                  )}

                  {track.clips.map((clip: any) => (
                    <button
                      key={clip.id}
                      type="button"
                      draggable
                      onDragStart={(event) => {
                        event.dataTransfer.effectAllowed = "move";
                        event.dataTransfer.setData("text/plain", clip.id);
                      }}
                      onClick={() => setSelection({ clipId: clip.id, trackId: track.id, type: "clip" })}
                      onDoubleClick={() => clearSelection()}
                      className="absolute top-3 flex h-14 items-center justify-between rounded-md border border-[#00B8DB]/60 bg-[#EAFBFF] px-3 text-left shadow-sm"
                      style={{
                        left: `${clip.start * 120}px`,
                        width: `${Math.max(clip.duration * 120, 80)}px`,
                      }}
                    >
                      <span className="truncate text-xs font-medium text-slate-700">{clip.id.slice(0, 8)}</span>
                      <span className="text-[10px] text-slate-500">{clip.duration.toFixed(1)}s</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
