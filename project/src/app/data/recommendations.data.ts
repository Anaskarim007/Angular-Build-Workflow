export type MoodId =
  | 'dark'
  | 'chill'
  | 'romantic'
  | 'mystery'
  | 'sad'
  | 'motivated'
  | 'mind-bending';

export type ItemType = 'Movie' | 'Series' | 'Song';

export interface Recommendation {
  id: number;
  title: string;
  type: ItemType;
  genre: string;
  rating: number;
  description: string;
  mood: MoodId;
  why: string;
}

export interface Mood {
  id: MoodId;
  label: string;
  tagline: string;
  emoji: string;
  accent: string;
}

export const MOODS: Mood[] = [
  { id: 'dark', label: 'Dark', tagline: 'Lean into the shadows', emoji: '🌑', accent: '#8a2be2' },
  { id: 'chill', label: 'Chill', tagline: 'Easy, breezy, unbothered', emoji: '🌿', accent: '#26c281' },
  { id: 'romantic', label: 'Romantic', tagline: 'Hearts on sleeves', emoji: '💖', accent: '#ff5d8f' },
  { id: 'mystery', label: 'Mystery', tagline: 'Trust no one', emoji: '🕵️', accent: '#4a90d9' },
  { id: 'sad', label: 'Sad', tagline: 'Let it out gently', emoji: '🌧️', accent: '#5b8def' },
  { id: 'motivated', label: 'Motivated', tagline: 'Time to move mountains', emoji: '🔥', accent: '#ff7a45' },
  { id: 'mind-bending', label: 'Mind-Bending', tagline: 'Question everything', emoji: '🌀', accent: '#00c2a8' },
];

export const RECOMMENDATIONS: Recommendation[] = [
  // DARK
  {
    id: 1, title: 'Se7en', type: 'Movie', genre: 'Crime Thriller', rating: 8.6, mood: 'dark',
    description: 'Two detectives hunt a killer who murders according to the seven deadly sins.',
    why: 'Its grim rain-soaked palette and moral weight sit perfectly with a dark mood.'
  },
  {
    id: 2, title: 'Mindhunter', type: 'Series', genre: 'Psychological Crime', rating: 8.6, mood: 'dark',
    description: 'FBI agents pioneer behavioral profiling by interviewing imprisoned serial killers.',
    why: 'Slow, clinical dread that rewards patience when you want something heavy.'
  },
  {
    id: 3, title: 'Sound of Silence — Disturbed', type: 'Song', genre: 'Alt Rock', rating: 9.0, mood: 'dark',
    description: 'A brooding orchestral cover of the Simon & Garfunkel classic.',
    why: 'Its low vocals and swelling chorus match a heavy, contemplative evening.'
  },

  // CHILL
  {
    id: 4, title: 'Midnight in Paris', type: 'Movie', genre: 'Romantic Fantasy', rating: 7.7, mood: 'chill',
    description: 'A writer wanders Paris at midnight and meets icons from the 1920s.',
    why: 'Warm golden visuals and a gentle pace — no stress, just atmosphere.'
  },
  {
    id: 5, title: 'Chef', type: 'Movie', genre: 'Feel-good Comedy', rating: 7.3, mood: 'chill',
    description: 'A chef quits his job and starts a food truck with his son.',
    why: 'Sunny, low-stakes and comforting — perfect for unwinding.'
  },
  {
    id: 6, title: 'Banana Pancakes — Jack Johnson', type: 'Song', genre: 'Acoustic', rating: 8.4, mood: 'chill',
    description: 'A laid-back acoustic tune about slowing down and staying in.',
    why: 'Soft strumming and a sleepy tempo that melts the day away.'
  },

  // ROMANTIC
  {
    id: 7, title: 'Pride & Prejudice', type: 'Movie', genre: 'Period Romance', rating: 7.9, mood: 'romantic',
    description: 'Elizabeth Bennet clashes and falls for the proud Mr. Darcy.',
    why: 'Yearning glances and a sweeping score — a textbook romantic night in.'
  },
  {
    id: 8, title: 'Normal People', type: 'Series', genre: 'Drama Romance', rating: 8.0, mood: 'romantic',
    description: 'Two Irish teenagers navigate an on-off relationship through college.',
    why: 'Tender, intimate and achingly real in its quiet moments.'
  },
  {
    id: 9, title: 'At Last — Etta James', type: 'Song', genre: 'Soul', rating: 9.2, mood: 'romantic',
    description: 'A timeless soul ballad about finally finding love.',
    why: 'That opening brass line is pure slow-dance magic.'
  },

  // MYSTERY
  {
    id: 10, title: 'Gone Girl', type: 'Movie', genre: 'Mystery Thriller', rating: 8.1, mood: 'mystery',
    description: 'A man becomes the prime suspect when his wife vanishes on their anniversary.',
    why: 'Twisty, unreliable narration that keeps you second-guessing everyone.'
  },
  {
    id: 11, title: 'Broadchurch', type: 'Series', genre: 'Crime Mystery', rating: 8.5, mood: 'mystery',
    description: 'Two detectives investigate a boy\'s death in a small coastal town.',
    why: 'Atmospheric cliffside setting where every neighbor hides something.'
  },
  {
    id: 12, title: 'Teardrop — Massive Attack', type: 'Song', genre: 'Trip-Hop', rating: 8.7, mood: 'mystery',
    description: 'A haunting instrumental-driven track with a whispery vocal.',
    why: 'Its murky beat and eerie mood soundtrack any slow-burn reveal.'
  },

  // SAD
  {
    id: 13, title: 'A Man Called Otto', type: 'Movie', genre: 'Drama', rating: 7.5, mood: 'sad',
    description: 'A grieving, grumpy widower is pulled back to life by his new neighbors.',
    why: 'Lets you sit in the sadness before gently pointing toward hope.'
  },
  {
    id: 14, title: 'After Life', type: 'Series', genre: 'Dark Comedy Drama', rating: 8.4, mood: 'sad',
    description: 'A journalist grieves his wife by saying whatever he wants to people.',
    why: 'Honest about loss, yet warm and quietly funny throughout.'
  },
  {
    id: 15, title: 'Fix You — Coldplay', type: 'Song', genre: 'Alt Rock', rating: 8.6, mood: 'sad',
    description: 'A building ballad about trying to heal someone you love.',
    why: 'The cathartic crescendo is made for a good, healing cry.'
  },

  // MOTIVATED
  {
    id: 16, title: 'Whiplash', type: 'Movie', genre: 'Music Drama', rating: 8.5, mood: 'motivated',
    description: 'An ambitious drummer pushes himself to the edge under a ruthless instructor.',
    why: 'Pure adrenaline and obsession — it lights a fire under you.'
  },
  {
    id: 17, title: 'The Last Dance', type: 'Series', genre: 'Sports Documentary', rating: 9.1, mood: 'motivated',
    description: 'The inside story of Michael Jordan and the Bulls\' final championship run.',
    why: 'Relentless drive and discipline on display in every episode.'
  },
  {
    id: 18, title: 'Lose Yourself — Eminem', type: 'Song', genre: 'Hip-Hop', rating: 9.0, mood: 'motivated',
    description: 'A tense anthem about seizing your one shot at success.',
    why: 'The pounding beat and urgent verses are a shot of pure focus.'
  },

  // MIND-BENDING
  {
    id: 19, title: 'Inception', type: 'Movie', genre: 'Sci-Fi Heist', rating: 8.8, mood: 'mind-bending',
    description: 'Thieves enter dreams to plant an idea in a CEO\'s mind.',
    why: 'Layered dream logic that demands — and rewards — your full attention.'
  },
  {
    id: 20, title: 'Dark', type: 'Series', genre: 'Sci-Fi Mystery', rating: 8.7, mood: 'mind-bending',
    description: 'A missing child uncovers a time-travel conspiracy across generations.',
    why: 'A puzzle box that only makes sense if you lean in and track every thread.'
  },
  {
    id: 21, title: 'Strobe — Deadmau5', type: 'Song', genre: 'Progressive House', rating: 8.8, mood: 'mind-bending',
    description: 'A slow-building electronic epic that morphs across ten minutes.',
    why: 'Its evolving structure feels like a dream folding in on itself.'
  },
];
