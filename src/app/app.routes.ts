import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Discover } from './pages/discover/discover';

export const routes: Routes = [
  { path: '', component: Home, title: 'MoodFlix — What are you feeling tonight?' },
  { path: 'discover', component: Discover, title: 'MoodFlix — Discover' },
  { path: '**', redirectTo: '' },
];
