import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PostsFacade } from './services/posts.facade';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts-dashboard',
  imports: [
    MatIconModule
  ],
  templateUrl: './posts-dashboard.component.html',
  styleUrl: './posts-dashboard.component.css',
  providers: [
    PostsFacade,
    PostsService
  ]
})
export class PostsDashboardComponent implements OnInit {
  private postsFacade = inject(PostsFacade);

  onSubmit() {

  }

  ngOnInit(): void {

  }
}
