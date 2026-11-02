"use client";

import { useEffect, useState } from "react";
import { createRenderWorker } from "./worker";

export function useRenderRuntime(src?: string) {
  const [frames, setFrames] = useState<any[]>([]);
  const [output, setOutput] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const worker = createRenderWorker();
    worker.postMessage({ type: "preview", payload: { src } });

    worker.onmessage = (event) => {
      const { type, payload } = event.data;

      if (type === "preview-ready") {
        setFrames(payload.frames);
      }

      if (type === "render-done") {
        setOutput(payload.output);
      }
    };

    return () => worker.terminate();
  }, [src]);

  return { frames, output };
}
