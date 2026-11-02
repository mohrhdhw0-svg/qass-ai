import { Elysia } from "elysia";

const app = new Elysia();

app.get("/health", () => ({ ok: true }));

app.post("/api/captions", async ({ body }) => {
  const payload = body as { mediaUrl: string; language?: string };
  return {
    trackId: "caption-track",
    language: payload.language ?? "en",
    segments: [
      { id: "s1", text: "Generated caption", start: 0, end: 2 },
      { id: "s2", text: "Timeline ready", start: 2, end: 5 },
    ],
  };
});

app.post("/api/translate", async ({ body }) => {
  const payload = body as { text: string; target?: string };
  return {
    source: payload.text,
    target: payload.target ?? "fr",
    translated: `${payload.text} (translated)`,
  };
});

app.post("/api/render", async ({ body }) => {
  const payload = body as { projectId: string; format?: string };

  return {
    jobId: `render-${payload.projectId}`,
    projectId: payload.projectId,
    format: payload.format ?? "mp4",
    status: "queued",
    outputPath: `exports/${payload.projectId}.${payload.format ?? "mp4"}`,
  };
});

app.listen(8787);
