import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({
    example: 'Pergunta 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  question: string;

  @ApiProperty({
    example: '74-1415-123',
    required: true,
  })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  channelId: string;
}
