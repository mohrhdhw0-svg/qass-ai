"use client";

import { useEffect } from "react";
import { useEditorStore } from "@opencut/editor-core";
import { AssetLibrary } from "./AssetLibrary";
import { CaptionPanel } from "./CaptionPanel";
import { EffectsPanel } from "./EffectsPanel";
import { ExportQueuePanel } from "./ExportQueuePanel";
import { PreviewPlayer } from "./PreviewPlayer";
import { ProjectStatusBar } from "./ProjectStatusBar";
import { TemplateLibrary } from "./TemplateLibrary";
import { TimelinePanel } from "./TimelinePanel";
import { TrimPanel } from "./TrimPanel";
import { hydrateProject } from "../../lib/project/lifecycle";
import { useProjectAutosave } from "../../lib/project/autosave";

export function EditorShell() {
  const project = useEditorStore((state) => state.project);

  useEffect(() => {
    hydrateProject();
  }, []);

  useProjectAutosave();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="h-16 border-b border-slate-200 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-[#00B8DB]" />
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Qass AI</p>
            <h1 className="text-lg font-semibold">OpenCut Studio</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-md border border-slate-200 px-3 py-2 text-sm">
            Import
          </button>
          <button className="rounded-md bg-[#00B8DB] px-4 py-2 text-sm font-medium text-white">
            Export
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        <aside className="w-72 border-r border-slate-200 bg-slate-50 p-4 space-y-4">
          <AssetLibrary />
          <TemplateLibrary />
        </aside>

        <main className="flex-1 p-4">
          <div className="grid h-full grid-cols-[1.45fr_0.95fr] gap-4">
            <section className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Preview</span>
                <span className="text-xs text-slate-500">30fps</span>
              </div>

              <div className="relative flex h-[calc(100%-49px)] items-center justify-center bg-slate-100">
                <PreviewPlayer />
              </div>
            </section>

            <div className="space-y-4">
              <TimelinePanel project={project} />
              <TrimPanel />
              <EffectsPanel />
              <CaptionPanel />
              <ExportQueuePanel />
            </div>
          </div>

          <ProjectStatusBar />
        </main>
      </div>
    </div>
  );
}
