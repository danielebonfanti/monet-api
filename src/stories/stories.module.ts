import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesService } from './providers/stories.service';
import { Story, StorySchema } from './schemas/story.schema';
import { StoriesController } from './stories.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }]),
  ],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule {}
