export interface MediaEngine {
  decode(input: string): Promise<void>;
  extractFrames(input: string): Promise<string[]>;
  renderPreview(input: string): Promise<string>;
  exportProject(input: string, format: "mp4" | "webm"): Promise<string>;
}

export const mediaEngineContract: MediaEngine = {
  decode: async () => undefined,
  extractFrames: async () => [],
  renderPreview: async (input) => input,
  exportProject: async (input, format) => `${input}.${format}`,
};
