import { inject, Injectable } from "@angular/core";
import { PostsService } from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {
  private postsService = inject(PostsService);

  dataPosts = this.postsService;

}
