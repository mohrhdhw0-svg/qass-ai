"use client";

import { starterTemplates } from "@opencut/editor-core";

export function TemplateLibrary() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Templates</p>
        <button className="rounded-md border border-slate-200 px-2 py-1 text-xs">
          Browse
        </button>
      </div>

      <div className="space-y-3">
        {starterTemplates.map((template) => (
          <div key={template.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-800">{template.name}</span>
              <span className="rounded-full bg-[#EAFBFF] px-2 py-1 text-[10px] text-[#00B8DB]">
                {template.category}
              </span>
            </div>

            <div className="mt-2 text-xs text-slate-500">
              {template.aspectRatio} • {template.duration}s
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
