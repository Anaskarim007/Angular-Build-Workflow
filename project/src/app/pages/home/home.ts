import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MoodService } from '../../services/mood.service';
import type { MoodId } from '../../data/recommendations.data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly moodService = inject(MoodService);
  private readonly router = inject(Router);

  get moods() {
    return this.moodService.moods;
  }
  get selectedMood() {
    return this.moodService.selectedMood();
  }
  get featured() {
    return this.moodService.featured();
  }
  get song() {
    return this.moodService.song();
  }

  selectMood(id: MoodId): void {
    this.moodService.selectMood(id);
  }

  goToDiscover(): void {
    this.router.navigate(['/discover']);
  }
}
