export interface Theme {
  name: string;
  description: string;
  quote?: string;
}

export interface EpicMoment {
  title: string;
  act: string;
  description: string;
  impact: string;
}

export interface CharacterProfile {
  name: string;
  role: string;
  archetype: string;
  analysis: string;
}

export interface IconicQuote {
  text: string;
  speaker: string;
  significance: string;
}

export interface BookSummary {
  id: string; // unique identifier
  title: string;
  author: string;
  era: string;
  genre: string; // The literary genre (e.g., Epic Poetry, Coming-of-Age, Dystopian Fiction)
  oneSentenceSummary: string;
  introduction: string;
  themes: Theme[];
  epicMoments: EpicMoment[];
  characterProfiles: CharacterProfile[];
  quotes: IconicQuote[];
  isPreCurated?: boolean; // True for pre-curated books
  imageUrl?: string; // Cover art identifier or asset
}

export type ThemeName = "editorial" | "midnight" | "parchment";
