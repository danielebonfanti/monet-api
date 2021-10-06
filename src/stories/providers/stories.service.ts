import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoryDto } from '../model/create-story.dto';
import { Story, StoryDocument } from '../schemas/story.schema';

@Injectable()
export class StoriesService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<StoryDocument>,
  ) {}

  async create(createCatDto: CreateStoryDto): Promise<Story> {
    const createdStory = new this.storyModel(createCatDto);
    return createdStory.save();
  }

  async findAll(): Promise<Story[]> {
    return this.storyModel.find().exec();
  }
}
