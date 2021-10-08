import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStoryDto } from './model/create-story.dto';
import { StoriesService } from './providers/stories.service';
import { Story } from './schemas/story.schema';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  async getAllPreview(): Promise<string[]> {
    const stories = await this.storiesService.find();
    return stories.map(story => {return story.preview});
  }

  @Get(':id')
  getStoryById(@Param('id') id: string): Promise<Story[]> {
    return this.storiesService.find(id);
  }

  @Post()
  createStory(@Body() createStoryDto: CreateStoryDto) {
    this.storiesService.create(createStoryDto);
  }

  @Delete(':id')
  deleteStoryById(@Param() params) {
    this.storiesService.deleteStory(params.id);
  }
}
