import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { join } from 'path';

import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostsModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../posts.proto'), // возможна леди баг
        package: 'posts',
      },
    },
  );
  await app.listen();
}

bootstrap();