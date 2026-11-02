export function createExportQueue() {
  return {
    queue: [] as Array<{ id: string; status: string; progress: number; output: string }>,
    add(job: { id: string; status: string; progress: number; output: string }) {
      this.queue.push(job);
    },
  };
}
