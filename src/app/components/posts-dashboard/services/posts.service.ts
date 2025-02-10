import { inject, Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';
import { environment } from '../../../../environments/environment.development';
import { first, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private httpClient = inject(HttpClient);

  onPostData() {
    const url = `${environment.apiUrl}posts/`;

    return this.httpClient.post<Posts>(url, null).pipe(
      first(),
      take(1),
    );
  }

}
