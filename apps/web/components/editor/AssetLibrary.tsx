"use client";

import { useEditorStore } from "@opencut/editor-core";
import { useRef } from "react";
import { addMediaToProject } from "../../lib/project/add-media";

export function AssetLibrary() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const project = useEditorStore((state) => state.project);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => addMediaToProject(file));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Media Library</p>
        <button onClick={() => fileInputRef.current?.click()} className="rounded-md bg-[#00B8DB] px-2 py-1 text-xs font-medium text-white">
          Add
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        accept="video/*,audio/*,image/*"
        onChange={(event) => handleFiles(event.target.files)}
      />

      <div className="space-y-2">
        {project?.assets.length ? (
          project.assets.map((asset) => (
            <div key={asset.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
              {asset.name}
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
            No media imported yet
          </div>
        )}
      </div>
    </div>
  );
}
