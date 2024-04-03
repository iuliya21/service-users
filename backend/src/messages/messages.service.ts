import { Injectable } from '@nestjs/common';
// import { CreateMessageDto } from './dto/create-message.dto';
// import { UpdateMessageDto } from './dto/update-message.dto';
import { promises as fs } from 'fs';
import { join } from 'path';

@Injectable()
export class MessagesService {
  async getData() {
    try {
      const filePath = join(__dirname, '../../src/utils/', 'messages.json');
      const data = await fs.readFile(filePath, { encoding: 'utf-8' });
      console.log(JSON.parse(data));
      return JSON.parse(data);
    } catch (error) {
      throw new Error(`Error reading JSON file: ${error.message}`);
    }
  }
  // create(createMessageDto: CreateMessageDto) {
  //   return 'This action adds a new message';
  // }

  // findAll() {
  //   return `This action returns all messages`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} message`;
  // }

  // update(id: number, updateMessageDto: UpdateMessageDto) {
  //   return `This action updates a #${id} message`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} message`;
  // }
}
