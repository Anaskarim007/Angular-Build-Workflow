import { Injectable, signal, computed } from '@angular/core';
import {
  MOODS,
  RECOMMENDATIONS,
  type Mood,
  type MoodId,
  type Recommendation,
} from '../data/recommendations.data';

@Injectable({ providedIn: 'root' })
export class MoodService {
  private readonly _selectedMood = signal<MoodId | null>(null);

  readonly moods = MOODS;
  readonly selectedMoodId = this._selectedMood.asReadonly();

  readonly selectedMood = computed<Mood | null>(() => {
    const id = this._selectedMood();
    return id ? MOODS.find((m) => m.id === id) ?? null : null;
  });

  readonly recommendationsForMood = computed<Recommendation[]>(() => {
    const id = this._selectedMood();
    return id ? RECOMMENDATIONS.filter((r) => r.mood === id) : [];
  });

  readonly featured = computed<Recommendation | null>(() => {
    const recs = this.recommendationsForMood();
    return recs.length ? recs[0] : null;
  });

  readonly song = computed<Recommendation | null>(() => {
    const recs = this.recommendationsForMood();
    return recs.find((r) => r.type === 'Song') ?? null;
  });

  selectMood(id: MoodId): void {
    this._selectedMood.set(id);
  }

  clearMood(): void {
    this._selectedMood.set(null);
  }
}
