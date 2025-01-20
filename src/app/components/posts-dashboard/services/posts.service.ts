import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';
import { environment } from '../../../../environments/environment.development';
import { first, map, Subject, switchMap, take } from 'rxjs';
import { PostsData } from '../models/posts-data';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private httpClient = inject(HttpClient);

  private dataPostsSubject = new Subject<Posts>();
  readonly dataPostsSubject$ = this.dataPostsSubject.asObservable();

  onPostData(id: number) {
    return this.httpClient.post<Posts>(environment.apiUrl + 'posts', id).pipe(
      first(),
      take(1),
      map((data) => this.dataPostsSubject.next(data))
    );
  }


}
