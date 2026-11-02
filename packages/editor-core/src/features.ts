export type EffectType =
  | "brightness"
  | "contrast"
  | "saturation"
  | "blur"
  | "vignette"
  | "warmth"
  | "coolness"
  | "sharpness";

export interface VideoEffect {
  id: string;
  clipId: string;
  type: EffectType;
  enabled: boolean;
  intensity: number;
}

export const builtInEffects = [
  { id: "brighten", name: "Brighten", type: "brightness", intensity: 18 },
  { id: "cinematic", name: "Cinematic", type: "contrast", intensity: 14 },
  { id: "clean", name: "Clean", type: "sharpness", intensity: 10 },
];
