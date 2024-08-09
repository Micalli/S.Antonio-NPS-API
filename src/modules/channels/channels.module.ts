import { Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './services/channels.service';
import { ValidateChannelIfExistsService } from './services/validate-channel-if-exists.service';

@Module({
  controllers: [ChannelsController],
  providers: [ChannelsService, ValidateChannelIfExistsService],
  exports: [ChannelsService],
})
export class ChannelsModule {}
