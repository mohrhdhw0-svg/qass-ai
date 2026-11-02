import { useEditorStore } from "@opencut/editor-core";

export async function translateText(text: string, target: string = "fr") {
  const response = await fetch("http://localhost:8787/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, target }),
  });

  if (!response.ok) {
    throw new Error("Translation failed");
  }

  return response.json();
}
