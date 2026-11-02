"use client";

import { useEditorStore } from "@opencut/editor-core";

export function ProjectStatusBar() {
  const project = useEditorStore((state) => state.project);

  return (
    <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-sm text-slate-700">
        Project: <span className="font-medium">{project?.name}</span>
      </div>

      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span>{project?.tracks.length ?? 0} tracks</span>
        <span>{project?.assets.length ?? 0} assets</span>
        <span>{project?.duration ?? 0}s</span>
      </div>
    </div>
  );
}
