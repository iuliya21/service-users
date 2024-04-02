import { Injectable } from '@nestjs/common';
// import { CreateMessageDto } from './dto/create-message.dto';
// import { UpdateMessageDto } from './dto/update-message.dto';
import * as fs from 'fs/promises';

@Injectable()
export class MessagesService {
  async readFile(filePath: string): Promise<any> {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
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
