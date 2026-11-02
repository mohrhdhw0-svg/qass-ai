export type TrackType = "video" | "audio" | "text" | "effect" | "caption";

export interface ProjectAsset {
  id: string;
  name: string;
  url: string;
  type: "image" | "video" | "audio" | "text";
  width?: number;
  height?: number;
  duration?: number;
}

export interface TimelineClip {
  id: string;
  mediaId: string;
  trackId: string;
  start: number;
  duration: number;
  trimIn: number;
  trimOut: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  effects: string[];
}

export interface TimelineTrack {
  id: string;
  type: TrackType;
  label: string;
  clips: TimelineClip[];
}

export interface Project {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fps: number;
  duration: number;
  assets: ProjectAsset[];
  tracks: TimelineTrack[];
}
