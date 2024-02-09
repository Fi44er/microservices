import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, Empty, FindOnePostDto, Post, Posts, PostsServiceController, UpdatePostDto } from 'proto/posts';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class PostsController implements PostsServiceController {
  constructor(private readonly postsService: PostsService) { }
  
  @GrpcMethod('PostsService', 'getAllPosts')
  getAllPosts()  {
    return this.postsService.GetAllPosts();
  }
  
  getPost(request: FindOnePostDto): Post | Observable<Post> | Promise<Post> {
    throw new Error('Method not implemented.');
  }
  
  createPost(request: CreatePostDto): Post | Observable<Post> | Promise<Post> {
    throw new Error('Method not implemented.');
  }
  
  updatePost(request: UpdatePostDto): Post | Observable<Post> | Promise<Post> {
    throw new Error('Method not implemented.');
  }
  
  deletePost(request: FindOnePostDto): Post | Observable<Post> | Promise<Post> {
    throw new Error('Method not implemented.');
  }
}
