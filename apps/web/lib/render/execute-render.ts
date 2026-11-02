export function executeRender(projectId: string, format: "mp4" | "webm" | "mov" = "mp4") {
  const worker = new Worker(new URL("./render-worker.ts", import.meta.url));
  worker.postMessage({
    type: "render",
    payload: { projectId, format },
  });

  return worker;
}
