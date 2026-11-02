import type { Project } from "@opencut/editor-core";

export function addClipToTrack(track: Project["tracks"][number], clip: Project["tracks"][number]["clips"][number]) {
  return {
    ...track,
    clips: [...track.clips, clip],
  };
}

export function removeClipFromTrack(track: Project["tracks"][number], clipId: string) {
  return {
    ...track,
    clips: track.clips.filter((clip) => clip.id !== clipId),
  };
}

export function trimClip(
  clip: Project["tracks"][number]["clips"][number],
  trimIn: number,
  trimOut: number
) {
  return {
    ...clip,
    trimIn,
    trimOut,
    duration: Math.max(0.1, trimOut - trimIn),
  };
}

export function moveClip(
  track: Project["tracks"][number],
  clipId: string,
  newStart: number
) {
  return {
    ...track,
    clips: track.clips.map((clip) =>
      clip.id === clipId ? { ...clip, start: newStart } : clip
    ),
  };
}
