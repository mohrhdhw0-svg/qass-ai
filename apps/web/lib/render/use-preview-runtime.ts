"use client";

import { useEffect, useState } from "react";

export function usePreviewRuntime(src?: string) {
  const [frames, setFrames] = useState<any[]>([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!src) {
      setFrames([]);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    const worker = new Worker(new URL("./render-worker.ts", import.meta.url));
    worker.postMessage({ type: "preview", payload: { src } });

    worker.onmessage = (event) => {
      const { type, payload } = event.data;
      if (type === "preview-ready") {
        setFrames(payload.frames);
        setStatus("ready");
      }
    };

    return () => worker.terminate();
  }, [src]);

  return { frames, status };
}
