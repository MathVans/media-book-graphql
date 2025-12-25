import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './modules/user/user.resolver';
import { UserModule } from './modules/user/user.module';
import dbConfig from './config/prod.db.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserService } from './modules/user/user.service';
import { PostModule } from './modules/post/post.module';
import { TagModule } from './modules/tag/tag.module';
import { ProfileModule } from './modules/profile/profile.module';
import { TagResolver } from './modules/tag/tag.resolver';
import { PostResolver } from './modules/post/post.resolver';
import { ProfileResolver } from './modules/profile/profile.resolver';
import { TagService } from './modules/tag/tag.service';
import { ProfileService } from './modules/profile/profile.service';
import { PostService } from './modules/post/post.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [dbConfig] }),
    TypeOrmModule.forRootAsync({ useFactory: dbConfig }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    UserModule,
    PostModule,
    TagModule,
    ProfileModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
