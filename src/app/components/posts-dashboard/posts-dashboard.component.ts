import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PostsFacade } from './services/posts.facade';
import { PostsService } from './services/posts.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-posts-dashboard',
  imports: [
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './posts-dashboard.component.html',
  styleUrl: './posts-dashboard.component.css',
  providers: [
    PostsFacade,
    PostsService,
    MatButtonModule
  ]
})
export class PostsDashboardComponent {
  private postsFacade = inject(PostsFacade);
  private postsService = inject(PostsService);

  public titlePost = computed(() => this.postsFacade.dataPartialPost().title);
  public bodyPost = computed(() => this.postsFacade.dataPartialPost().body);

  onSubmit(): void {
    this.postsService.onPostData();
  }
}
