import { inject, Injectable, signal } from "@angular/core";
import { PostsService } from "./posts.service";
import { BehaviorSubject } from "rxjs";
import { PostsData } from "../models/posts-data";

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {
  private postsService = inject(PostsService);

  private dataPostUniq = signal<PostsData>({
    title: undefined,
    body: undefined
  });

  readonly dataPostUniq$ = this.dataPostUniq;

  onSetDataPostOnly(id: number): void {
    this.postsService.onPostData(id);
  }

  onGetDataPostUniq() {
    return this.postsService.dataPostsSubject$.subscribe(
      (onlyData) => {
        this.dataPostUniq.set({
          title: onlyData.title,
          body: onlyData.body
        });
      }
    )
  }
}
