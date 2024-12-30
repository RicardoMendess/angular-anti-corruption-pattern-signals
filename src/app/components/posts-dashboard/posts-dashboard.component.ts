import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PostsFacade } from './services/posts.facade';
import { PostsData } from './models/posts-data';

@Component({
  selector: 'app-posts-dashboard',
  imports: [
    MatIconModule
  ],
  templateUrl: './posts-dashboard.component.html',
  styleUrl: './posts-dashboard.component.css',
})
export class PostsDashboardComponent {
  private postsFacade = inject(PostsFacade);

  private dataPosts!: PostsData[];
}
