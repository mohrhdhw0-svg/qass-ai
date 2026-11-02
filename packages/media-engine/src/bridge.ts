export interface NativeExportBridge {
  exportProject(projectId: string, format: "mp4" | "webm" | "mov"): Promise<string>;
  renderPreview(projectId: string): Promise<string>;
}

export function createNativeExportBridge(): NativeExportBridge {
  return {
    exportProject: async (projectId, format) => `exports/${projectId}.${format}`,
    renderPreview: async (projectId) => `previews/${projectId}.webm`,
  };
}
