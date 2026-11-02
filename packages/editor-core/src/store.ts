import { create } from "zustand";
import type { Project } from "./types";
import type { CaptionTrack } from "./captions";
import type { VideoEffect } from "./features";

interface EditorState {
  project: Project | null;
  captions: CaptionTrack[];
  effects: VideoEffect[];
  setProject: (project: Project) => void;
  addAsset: (asset: Project["assets"][number]) => void;
  addClipToTrack: (trackId: string, clip: Project["tracks"][number]["clips"][number]) => void;
  removeClip: (trackId: string, clipId: string) => void;
  addCaptionTrack: (caption: CaptionTrack) => void;
  addEffect: (effect: VideoEffect) => void;
}

const initialProject: Project = {
  id: "demo-project",
  name: "New Qass AI Project",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  fps: 30,
  duration: 30,
  assets: [],
  tracks: [
    { id: "video-track-1", type: "video", label: "Video", clips: [] },
    { id: "audio-track-1", type: "audio", label: "Audio", clips: [] },
    { id: "text-track-1", type: "text", label: "Text", clips: [] },
  ],
};

export const useEditorStore = create<EditorState>((set) => ({
  project: initialProject,
  captions: [],
  effects: [],
  setProject: (project) => set({ project }),
  addAsset: (asset) =>
    set((state) => ({
      project: state.project
        ? { ...state.project, assets: [...state.project.assets, asset] }
        : state.project,
    })),
  addClipToTrack: (trackId, clip) =>
    set((state) => {
      if (!state.project) return state;
      return {
        project: {
          ...state.project,
          tracks: state.project.tracks.map((track) =>
            track.id === trackId ? { ...track, clips: [...track.clips, clip] } : track
          ),
        },
      };
    }),
  removeClip: (trackId, clipId) =>
    set((state) => {
      if (!state.project) return state;
      return {
        project: {
          ...state.project,
          tracks: state.project.tracks.map((track) =>
            track.id === trackId
              ? { ...track, clips: track.clips.filter((clip) => clip.id !== clipId) }
              : track
          ),
        },
      };
    }),
  addCaptionTrack: (caption) =>
    set((state) => ({
      captions: [...state.captions, caption],
    })),
  addEffect: (effect) =>
    set((state) => ({
      effects: [...state.effects, effect],
    })),
}));
