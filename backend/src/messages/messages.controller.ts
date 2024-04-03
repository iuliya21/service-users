import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
// import { CreateMessageDto } from './dto/create-message.dto';
// import { UpdateMessageDto } from './dto/update-message.dto';

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
}
