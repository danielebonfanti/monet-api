import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type StoryDocument = Story & Document;

@Schema()
export class Story {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop([String])
  tags: string[];
}

export const StorySchema = SchemaFactory.createForClass(Story);
