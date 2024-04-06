import { IsInt, IsString, IsDate, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ description: 'id генерируется при отправке данных на сервер' })
  @IsInt()
  id: number;

  @ApiProperty({
    description:
      'при создании нового обращения пользователь выбирает тип - Ошибка / Новая функциональность / Улучшение / Документация',
  })
  @IsString()
  type: string;

  @ApiProperty({ description: 'описание поступает с фронтенда' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'пользователь, создавший обращение' })
  @IsString()
  user: string;

  @ApiProperty({
    description: 'дата генерируется в соответствии с текущей датой',
  })
  @IsDate()
  date: Date;

  @ApiProperty({
    description: 'при создании обращения статус устанавливается - В очереди',
  })
  @IsIn(['В очереди', 'В работе', 'Выполнено'])
  status: string;
}
