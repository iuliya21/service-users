import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async getData() {
    try {
      return await this.messagesService.getData();
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post()
  async addData(@Body() newMessage: CreateMessageDto) {
    try {
      await this.messagesService.createMessage(newMessage);
      return { message: newMessage };
    } catch (error) {
      return { error: error.message };
    }
  }
}
