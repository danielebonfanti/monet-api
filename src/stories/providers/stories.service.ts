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

  async find(id?: string): Promise<Story[]> {
    const paramTosearch = id ? { _id: id } : undefined;
    return this.storyModel.find(paramTosearch).exec();
  }

  deleteStory(id: string) {
    this.storyModel
      .deleteOne({ _id: id })
      .exec()
      .catch((error) => console.log(`Delete Story - Error: ${error}`));
  }
}
