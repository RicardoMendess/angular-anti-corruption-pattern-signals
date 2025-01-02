import { inject, Injectable, signal } from '@angular/core';
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

  private dataPosts = signal<Posts[]>([]);
  readonly _dataPosts = this.dataPosts.asReadonly;

  constructor() {
    this.getPosts();
  }

  getPosts() {
    const request = this.httpClient.get<Posts[]>(environment.apiUrl + 'posts').pipe(
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

    return request;
  }
}
