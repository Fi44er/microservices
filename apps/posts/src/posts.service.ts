import { Injectable } from '@nestjs/common';
import { CreatePostDto, Empty, FindOnePostDto, Post, Posts, PostsServiceController, UpdatePostDto } from 'proto/posts';

@Injectable()
export class PostsService {

  GetAllPosts(): Posts {

    const myPosts: Posts = {
      Posts: [
        {
          id: 1,
          title: "First Post",
          content: "This is the content of the first post."
        },
        {
          id: 2,
          title: "Second Post",
          content: "This is the content of the second post."
        }
      ]
    };
    return myPosts
  }

  // GetPost() {}

  // CreatePost() {}

  // UpdatePost() {}

  // DeletePost() {}
}
