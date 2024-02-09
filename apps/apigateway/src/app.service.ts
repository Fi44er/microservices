import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {PostsServiceClient, POSTS_SERVICE_NAME, Posts} from 'proto/posts'
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
@Injectable()
export class AppService implements OnModuleInit {
  private postsServiceClient: PostsServiceClient
  
  constructor(@Inject('posts') private readonly clientGrpc: ClientGrpc) { }

  onModuleInit() {
    this.postsServiceClient = this.clientGrpc.getService<PostsServiceClient>(POSTS_SERVICE_NAME)
  }

  getPosts(): Observable<Posts>{
    return this.postsServiceClient.getAllPosts({})
  }
}
