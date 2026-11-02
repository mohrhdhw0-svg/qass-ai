export function saveProject(project: any) {
  localStorage.setItem("qass-ai-project", JSON.stringify(project));
}

export function loadProject() {
  const raw = localStorage.getItem("qass-ai-project");
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
