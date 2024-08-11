import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChannelDto {
  @ApiProperty({
    example: 'Nome do canal',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  channel: string;
}
