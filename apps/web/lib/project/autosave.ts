"use client";

import { useEffect } from "react";
import { useEditorStore } from "@opencut/editor-core";

export function useProjectAutosave() {
  const project = useEditorStore((state) => state.project);

  useEffect(() => {
    if (!project) return;
    localStorage.setItem("qass-ai-project", JSON.stringify(project));
  }, [project]);
}
