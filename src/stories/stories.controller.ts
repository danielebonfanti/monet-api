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
import snarkdown from 'snarkdown';

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
  async getStoryById(@Param('id') id: string): Promise<Story[]> {
    const story = await this.storiesService.find(id);
    story[0].text = snarkdown(story[0].text);
    return story;
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
