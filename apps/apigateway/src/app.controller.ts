import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get-all-post')
  getPosts() {
    return this.appService.getPosts();
  }
}
