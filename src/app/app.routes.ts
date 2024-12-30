import { Routes } from '@angular/router';
import { PostsDashboardComponent } from './components/posts-dashboard/posts-dashboard.component';

export const routes: Routes = [
  {
    path: 'posts',
    loadComponent: () => import('./components/posts-dashboard/posts-dashboard.component').then(p => PostsDashboardComponent)
  }
];
