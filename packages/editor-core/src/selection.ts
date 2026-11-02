export interface EditorSelection {
  clipId: string | null;
  trackId: string | null;
  type: "clip" | "track" | "effect" | null;
}

export const emptySelection: EditorSelection = {
  clipId: null,
  trackId: null,
  type: null,
};
