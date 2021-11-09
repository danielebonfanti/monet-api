import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards
} from '@nestjs/common';
import snarkdown from 'snarkdown';
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
  async getStoryById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Story[]> {
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
  deleteStoryById(@Param('id', new ParseUUIDPipe()) id: string) {
    this.storiesService.deleteStory(id);
  }
}
