import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';
import { environment } from '../../../../environments/environment.development';
import { first, map, Subject, take } from 'rxjs';
import { PostsData } from '../models/posts-data';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private httpClient = inject(HttpClient);

  private dataPostsSubject = new Subject<PostsData | null>();
  readonly dataPostsSubject$ = this.dataPostsSubject.asObservable();

  onPostData() {
    return this.httpClient.post<Posts>(environment.apiUrl + 'posts', 1).pipe(
      first(),
      take(1),
      map((data) => this.dataPostsSubject.next({
        title: data.title,
        body: data.body
      }))
    );
  }

}
