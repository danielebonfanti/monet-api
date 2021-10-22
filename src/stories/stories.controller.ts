import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStoryDto } from './model/create-story.dto';
import { StoriesService } from './providers/stories.service';
import { Story } from './schemas/story.schema';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  async getAllPreview(): Promise<any> {
    const stories = await this.storiesService.find();
    return stories
      .map((story) => {
        return { id: story._id, preview: story.preview };
      })
      .filter((previews) => previews && previews.preview);
  }

  @Get(':id')
  getStoryById(@Param('id') id: string): Promise<Story[]> {
    return this.storiesService.find(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createStory(@Body() createStoryDto: CreateStoryDto) {
    this.storiesService.create(createStoryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteStoryById(@Param() params) {
    this.storiesService.deleteStory(params.id);
  }
}
