import type { Project } from "@opencut/editor-core";

export function createProject(name: string): Project {
  return {
    id: crypto.randomUUID(),
    name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    fps: 30,
    duration: 30,
    assets: [],
    tracks: [
      { id: crypto.randomUUID(), type: "video", label: "Video", clips: [] },
      { id: crypto.randomUUID(), type: "audio", label: "Audio", clips: [] },
      { id: crypto.randomUUID(), type: "text", label: "Text", clips: [] },
    ],
  };
}
