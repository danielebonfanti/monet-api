import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type StoryDocument = Story & Document;

@Schema()
export class Story {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  preview: string;

  @Prop([String])
  tags: string[];
}

export const StorySchema = SchemaFactory.createForClass(Story);
