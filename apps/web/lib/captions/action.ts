import { useEditorStore } from "@opencut/editor-core";

export async function runAutoCaption() {
  const project = useEditorStore.getState().project;
  const firstAsset = project?.assets[0];

  if (!firstAsset) return;

  const result = await fetch("http://localhost:8787/api/captions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mediaUrl: firstAsset.url, language: "en" }),
  }).then((res) => res.json());

  const captionTrack = {
    id: crypto.randomUUID(),
    name: "Auto Captions",
    language: "en",
    enabled: true,
    segments: result.segments ?? [],
  };

  useEditorStore.getState().addCaptionTrack(captionTrack);
}
