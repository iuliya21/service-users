import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
import * as path from 'path';
// import { CreateMessageDto } from './dto/create-message.dto';
// import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async getData(): Promise<any> {
    try {
      const filePath = path.join(__dirname, 'messages.json');
      const data = await this.messagesService.readFile(filePath);
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }

  // @Post()
  // create(@Body() createMessageDto: CreateMessageDto) {
  //   return this.messagesService.create(createMessageDto);
  // }

  // @Get("data")
  // async getData(): Promise<any>
  // try {
  //   const data = await this.
  // } catch {

  // }

  // @Get()
  // findAll() {
  //   return this.messagesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.messagesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
  //   return this.messagesService.update(+id, updateMessageDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.messagesService.remove(+id);
  // }
}
