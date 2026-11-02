export async function generateCaptionsFromMedia(mediaUrl: string) {
  const response = await fetch("http://localhost:8787/api/captions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mediaUrl, language: "en" }),
  });

  if (!response.ok) {
    throw new Error("Caption generation failed");
  }

  return response.json();
}
