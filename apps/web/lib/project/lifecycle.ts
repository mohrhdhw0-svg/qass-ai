"use client";

import { useEffect } from "react";
import { useEditorStore } from "@opencut/editor-core";
import { createProject } from "./create-project";
import { loadProject, saveProject } from "./persistence";

export function hydrateProject() {
  const existing = loadProject();

  if (existing) {
    useEditorStore.getState().setProject(existing);
    return;
  }

  const project = createProject("New Qass AI Project");
  useEditorStore.getState().setProject(project);
  saveProject(project);
}
