import { useEditorStore } from "@opencut/editor-core";
import type { ProjectAsset } from "@opencut/editor-core";

export function addMediaToProject(file: File) {
  const asset: ProjectAsset = {
    id: crypto.randomUUID(),
    name: file.name,
    type: file.type.startsWith("video")
      ? "video"
      : file.type.startsWith("audio")
        ? "audio"
        : file.type.startsWith("image")
          ? "image"
          : "text",
    url: URL.createObjectURL(file),
    width: 1920,
    height: 1080,
    duration: file.type.startsWith("video") ? 30 : undefined,
  };

  const state = useEditorStore.getState();
  const project = state.project;
  if (!project) return;

  const nextProject = {
    ...project,
    assets: [...project.assets, asset],
    updatedAt: new Date().toISOString(),
  };

  const track = nextProject.tracks.find((t) => t.type === "video") ?? nextProject.tracks[0];
  const clip = {
    id: crypto.randomUUID(),
    mediaId: asset.id,
    trackId: track.id,
    start: track.clips.length ? track.clips[track.clips.length - 1].start + 3 : 0,
    duration: asset.duration ?? 3,
    trimIn: 0,
    trimOut: asset.duration ?? 3,
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    effects: [],
  };

  const tracks = nextProject.tracks.map((t) =>
    t.id === track.id ? { ...t, clips: [...t.clips, clip] } : t
  );

  useEditorStore.getState().setProject({
    ...nextProject,
    tracks,
  });
}
