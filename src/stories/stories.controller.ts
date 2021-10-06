import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStoryDto } from './model/create-story.dto';
import { StoriesService } from './providers/stories.service';
import { Story } from './schemas/story.schema';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  getAllPreview(): Promise<Story[]> {
    return this.storiesService.findAll();
  }

  @Get(':id')
  getStoryById(@Param('id') id: string): string {
    return `Get story by id ${id}`;
  }

  @Post()
  createStory(@Body() createStoryDto: CreateStoryDto) {
    this.storiesService.create(createStoryDto);
  }

  @Delete(':id')
  deleteStoryById(@Param('id') id: string) {
    console.log(`Delete ${id} story`);
  }
}
