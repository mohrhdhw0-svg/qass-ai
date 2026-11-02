"use client";

import { type Project } from "@opencut/editor-core";

export function TimelinePanel({ project }: { project: Project | null }) {
  const tracks = project?.tracks ?? [];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="text-sm font-medium text-slate-800">Timeline</div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-slate-200 px-2 py-1 text-xs">
            + Track
          </button>
          <button className="rounded-md bg-[#00B8DB] px-2 py-1 text-xs text-white">
            Play
          </button>
        </div>
      </div>

      <div className="h-[420px] overflow-y-auto">
        {tracks.map((track) => (
          <div key={track.id} className="border-b border-slate-200 bg-white">
            <div className="flex h-20 items-center">
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
