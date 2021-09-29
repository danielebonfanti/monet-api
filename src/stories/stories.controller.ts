import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStoryDto } from './model/create-story.dto';

@Controller('stories')
export class StoriesController {
    @Get()
    getAllPreview(): string {
        return "Get all stories preview";
    }

    @Get(':id')
    getStoryById(@Param('id') id: string): string {
        return `Get story by id ${id}`;
    }

    @Post()
    createStory(@Body() createStoryDto: CreateStoryDto) {
        console.log("Insert a new story");
    }

    @Delete(':id') 
    deleteStoryById(@Param('id') id: string) {
        console.log(`Delete ${id} story`);
    }
}
