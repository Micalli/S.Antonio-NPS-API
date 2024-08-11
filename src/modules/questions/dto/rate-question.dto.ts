import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class RateQuestionDto {
  @ApiProperty({
    example: '74-1415-123',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  note: string;

  @ApiProperty({
    example: 10,
    required: true,
  })
  @IsNumber()
  grade: number;
}
