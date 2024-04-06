import { Injectable, Logger } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { promises as fs } from 'fs';
import { join } from 'path';

const MESSAGE_STATUS_QUEUED = 'В очереди';

@Injectable()
export class MessagesService {
  private readonly logger = new Logger(MessagesService.name);
  async getData() {
    try {
      const filePath = join(__dirname, '../../src/utils/', 'messages.json');
      const data = await fs.readFile(filePath, { encoding: 'utf-8' });
      return JSON.parse(data);
    } catch (error) {
      this.logger.error(`Error reading JSON file: ${error.message}`);
      throw new Error(`Error reading JSON file: ${error.message}`);
    }
  }

  async createMessage(newMessage: CreateMessageDto) {
    try {
      const filePath = join(__dirname, '../../src/utils/', 'messages.json');
      const existingData = await this.getData();
      const maxId = existingData.reduce(
        (max: number, msg: { id: number }) => (msg.id > max ? msg.id : max),
        0,
      );
      newMessage.id = maxId + 1;
      newMessage.status = MESSAGE_STATUS_QUEUED;
      existingData.push(newMessage);
      await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), {
        encoding: 'utf-8',
      });
    } catch (error) {
      this.logger.error(`Error writing JSON file: ${error.message}`);
      throw new Error(`Error writing JSON file: ${error.message}`);
    }
  }
}
