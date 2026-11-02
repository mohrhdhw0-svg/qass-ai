"use client";

import { useEditorStore, useSelectionStore } from "@opencut/editor-core";

export function TrimPanel() {
  const project = useEditorStore((state) => state.project);
  const setProject = useEditorStore((state) => state.setProject);
  const selection = useSelectionStore((state) => state.selection);

  const selectedClip = project?.tracks
    .flatMap((track) => track.clips)
    .find((clip) => clip.id === selection.clipId);

  const updateClip = (field: "trimIn" | "trimOut", value: number) => {
    if (!project || !selectedClip) return;

    const nextProject = {
      ...project,
      updatedAt: new Date().toISOString(),
      tracks: project.tracks.map((track) => ({
        ...track,
        clips: track.clips.map((clip) =>
          clip.id === selectedClip.id ? { ...clip, [field]: value } : clip
        ),
      })),
    };

    setProject(nextProject);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Selected clip</p>
      </div>

      {selectedClip ? (
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Clip ID</div>
            <div className="mt-1 text-sm font-medium text-slate-800">{selectedClip.id}</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Trim</div>

            <div className="mt-2 space-y-2">
              <label className="block text-[10px] text-slate-500">Trim in</label>
              <input
                type="range"
                min={0}
                max={Math.max(selectedClip.duration, 1)}
                value={selectedClip.trimIn}
                onChange={(event) => updateClip("trimIn", Number(event.target.value))}
                className="w-full"
              />

              <label className="block text-[10px] text-slate-500">Trim out</label>
              <input
                type="range"
                min={0}
                max={Math.max(selectedClip.duration, 1)}
                value={selectedClip.trimOut}
                onChange={(event) => updateClip("trimOut", Number(event.target.value))}
                className="w-full"
              />
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
