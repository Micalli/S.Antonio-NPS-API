import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './shared/database/database.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { AnswersModule } from './modules/answers/answers.module';

@Module({
  imports: [DatabaseModule, QuestionsModule, ChannelsModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
