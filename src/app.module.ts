import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesController } from './stories/stories.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://daniele_admin:eDvDbrCip7qXMaHJ@cluster0.m4vq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [StoriesController],
  providers: [],
})
export class AppModule {}
