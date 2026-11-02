import { executeRender } from "./execute-render";

export function exportProject(projectId: string) {
  return executeRender(projectId, "mp4");
}
