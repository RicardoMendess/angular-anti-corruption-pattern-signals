import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';
import { environment } from '../../../../environments/environment.development';
import { first, switchMap, take } from 'rxjs';
import { PostsData } from '../models/posts-data';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private httpClient = inject(HttpClient);

  private dataPosts = signal<Posts[]>([
    {
      userId: undefined,
      id: undefined,
      title: undefined,
      body: undefined
    }
  ]);

  postsData = computed(() => this.dataPosts());

  getPosts() {
    this.httpClient.get<Posts[]>(environment.apiUrl + 'posts').pipe(
      first(),
      take(1),
      switchMap((data) => data.map((posts) => this.dataPosts.set([
        {
          userId: posts.userId,
          id: posts.id,
          title: posts.title,
          body: posts.body
        }
      ])))
    );
  }
}
