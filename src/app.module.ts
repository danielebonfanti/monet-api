import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesModule } from './stories/stories.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://daniele_admin:eDvDbrCip7qXMaHJ@cluster0.m4vq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    StoriesModule,
  ],
})
export class AppModule {}
