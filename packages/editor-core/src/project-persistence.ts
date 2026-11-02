import type { Project } from "@opencut/editor-core";

export function saveProjectState(project: Project) {
  localStorage.setItem("qass-ai-project", JSON.stringify(project));
}

export function loadProjectState(): Project | null {
  const raw = localStorage.getItem("qass-ai-project");
  if (!raw) return null;

  try {
    return JSON.parse(raw) as Project;
  } catch {
    return null;
  }
}
