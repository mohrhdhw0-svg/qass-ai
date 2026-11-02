export function createRenderWorker() {
  return new Worker(new URL("./render-worker.ts", import.meta.url));
}
