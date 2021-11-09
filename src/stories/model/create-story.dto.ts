import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  tag: string[];
}
