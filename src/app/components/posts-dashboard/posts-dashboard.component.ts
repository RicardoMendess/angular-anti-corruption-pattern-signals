import { Component, computed, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PostsFacade } from './services/posts.facade';
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
    MatButtonModule
  ]
})
export class PostsDashboardComponent {
  private postsFacade = inject(PostsFacade);

  private title = this.postsFacade.dataPartialPost().title;
  private body = this.postsFacade.dataPartialPost().body;

  get Title() {
    return this.title;
  }

  get Body() {
    return this.body;
  }

  onSubmit(): void {
    this.postsFacade.onGetPartialDataPost();
  }
}
