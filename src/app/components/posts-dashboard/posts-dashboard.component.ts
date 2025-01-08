import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PostsFacade } from './services/posts.facade';
import { of } from 'rxjs';
import { Posts } from './models/posts';

@Component({
  selector: 'app-posts-dashboard',
  imports: [
    MatIconModule
  ],
  templateUrl: './posts-dashboard.component.html',
  styleUrl: './posts-dashboard.component.css',
})
export class PostsDashboardComponent implements OnInit {
  private postsFacade = inject(PostsFacade);

  dataPosts = this.postsFacade.dataPosts;

  dataPostsList = new Array<Posts>();

  ngOnInit(): void {

  }
}
