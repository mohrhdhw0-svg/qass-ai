export interface TemplateDefinition {
  id: string;
  name: string;
  category: "social" | "promo" | "travel" | "business" | "vlog";
  aspectRatio: "16:9" | "9:16" | "1:1";
  duration: number;
  tracks: string[];
  description?: string;
}

export const starterTemplates: TemplateDefinition[] = [
  {
    id: "promo-cyan",
    name: "Promo Cyan",
    category: "promo",
    aspectRatio: "16:9",
    duration: 20,
    tracks: ["video", "text", "audio"],
  },
  {
    id: "short-form",
    name: "Short Form",
    category: "social",
    aspectRatio: "9:16",
    duration: 15,
    tracks: ["video", "caption", "audio"],
  },
];
