self.onmessage = (event: MessageEvent) => {
  const { type, payload } = event.data as {
    type: "preview" | "render";
    payload: any;
  };

  if (type === "preview") {
    const frames = Array.from({ length: 5 }, (_, index) => ({
      id: crypto.randomUUID(),
      timestamp: index,
      url: payload.src,
    }));

    self.postMessage({
      type: "preview-ready",
      payload: { frames },
    });
    return;
  }

  if (type === "render") {
    const { projectId, format = "mp4" } = payload;

    self.postMessage({
      type: "render-progress",
      payload: {
        projectId,
        format,
        status: "rendering",
        progress: 50,
      },
    });

    self.postMessage({
      type: "render-done",
      payload: {
        projectId,
        format,
        status: "done",
        output: `exports/${projectId}.${format}`,
        progress: 100,
      },
    });
  }
};
