export interface CaptionSegment {
  id: string;
  text: string;
  start: number;
  end: number;
  style?: Record<string, string | number>;
}

export interface CaptionTrack {
  id: string;
  name: string;
  language: string;
  enabled: boolean;
  segments: CaptionSegment[];
}
