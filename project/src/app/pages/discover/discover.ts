import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MoodService } from '../../services/mood.service';

@Component({
  selector: 'app-discover',
  imports: [],
  templateUrl: './discover.html',
  styleUrl: './discover.scss',
})
export class Discover {
  protected readonly moodService = inject(MoodService);
  private readonly router = inject(Router);

  get selectedMood() {
    return this.moodService.selectedMood();
  }
  get recommendations() {
    return this.moodService.recommendationsForMood();
  }

  backToMoods(): void {
    this.router.navigate(['/']);
  }
}
