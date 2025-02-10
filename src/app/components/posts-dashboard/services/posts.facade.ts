import { inject, Injectable, signal } from "@angular/core";
import { PostsService } from "./posts.service";
import { BehaviorSubject } from "rxjs";
import { PostsData } from "../models/posts-data";

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {
  private postsService = inject(PostsService);

  public dataPartialPost = signal<PostsData>({
    title: undefined,
    body: undefined
  });

  public onGetPartialDataPost() {
    this.postsService.onPostData().subscribe(
      (data) => {
        if(data != null) {
          this.dataPartialPost.set({
            title: data.title,
            body: data.body
          });
        }
      }
    )
  }
}
