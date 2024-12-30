import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';
import { environment } from '../../../../environments/environment.development';
import { first, take } from 'rxjs';
import { PostsData } from '../models/posts-data';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private httpClient = inject(HttpClient);

  private dataPosts = signal<PostsData[]>([]);
  readonly _dataPosts = this.dataPosts.asReadonly;

  constructor() { }

  getPosts() {
    const request = this.httpClient.get<Posts[]>(environment.apiUrl + 'posts').pipe(
      first(),
      take(1)
    );

    request.subscribe(
      (data) => {
        this.dataPosts.set(data);
      }
    )
  }
}
