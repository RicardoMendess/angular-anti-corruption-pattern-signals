import { inject, Injectable } from "@angular/core";
import { PostsService } from "./posts.service";
import { BehaviorSubject } from "rxjs";
import { PostsData } from "../models/posts-data";

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {
  private postsService = inject(PostsService);

  private dataPostsBySelectorsSignal = new BehaviorSubject<PostsData | null>(null);
  readonly dataPostsBySelectorsSignal$ = this.dataPostsBySelectorsSignal.asObservable();

  onGetDataSelector() {
    const titleSignal = this.postsService.title.toString();
    const bodySignal = this.postsService.body.toString();

    if(titleSignal != undefined && bodySignal != undefined) {
      this.dataPostsBySelectorsSignal.next({
        title: titleSignal,
        body: bodySignal,
      })
    }
  }

}
