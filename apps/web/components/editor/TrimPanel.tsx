"use client";

import { useSelectionStore } from "@opencut/editor-core";

export function TrimPanel() {
  const selection = useSelectionStore((state) => state.selection);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Selected clip</p>
      </div>

      {selection.clipId ? (
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Clip ID</div>
            <div className="mt-1 text-sm font-medium text-slate-800">{selection.clipId}</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Trim</div>

            <div className="mt-2 space-y-2">
              <input type="range" min={0} max={100} defaultValue={30} className="w-full" />
              <input type="range" min={0} max={100} defaultValue={70} className="w-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
          Select a clip to trim
        </div>
      )}
    </div>
  );
}
