import { Module } from '@nestjs/common';
import { StoriesController } from './stories/stories.controller';

@Module({
  imports: [],
  controllers: [StoriesController],
  providers: [],
})
export class AppModule {}
