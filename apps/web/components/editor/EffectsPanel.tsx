"use client";

import { builtInEffects } from "@opencut/editor-core";

export function EffectsPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Effects</p>
        <button className="rounded-md border border-slate-200 px-2 py-1 text-xs">Add</button>
      </div>

      <div className="space-y-3">
        {builtInEffects.map((effect) => (
          <div key={effect.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-800">{effect.name}</span>
              <button className="rounded border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-600">
                Apply
              </button>
            </div>

            <div className="mt-3">
              <div className="mb-1 flex justify-between text-[10px] text-slate-500">
                <span>Intensity</span>
                <span>{effect.intensity}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-[#00B8DB]" style={{ width: `${effect.intensity}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
