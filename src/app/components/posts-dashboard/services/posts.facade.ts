import { inject, Injectable } from "@angular/core";
import { PostsService } from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {
  private postsService = inject(PostsService);

  private dataPosts = this.postsService.getPosts();

  get DataPosts() {
    return this.dataPosts;
  }
}
