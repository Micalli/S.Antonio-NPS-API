import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({
    example: 'Resposta',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  answer: string;

  @ApiProperty({
    example: '74-1415-123',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  questionId: string;
}
