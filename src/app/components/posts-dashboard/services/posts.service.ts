import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';
import { environment } from '../../../../environments/environment.development';
import { first, map, Subject, switchMap, take } from 'rxjs';
import { PostsData } from '../models/posts-data';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private httpClient = inject(HttpClient);

  private postDataState = signal<Posts[]>([
    {
      id: undefined,
      userId: undefined,
      title: undefined,
      body: undefined
    }
  ]);

  title = computed(() => this.postDataState().map(data => data.title));
  body = computed(() => this.postDataState().map(data => data.body));

  private postDataSubjectList = new Subject<Posts[]>();

  onGetDataPosts() {
    this.httpClient.post<Posts[]>(environment.apiUrl + 'posts', 1).pipe(
      first(),
      take(1),
      switchMap(async (data) => this.postDataSubjectList.next(data))
    );
  }

  onSetDataForSelectors() {
    this.postDataSubjectList.pipe(
      map((data) => this.postDataState.set(data))
    );
  }

  onSetDataPostForEachState(dataPosts: Array<Posts>): void {
    this.postDataState.set(dataPosts);
  }
}
