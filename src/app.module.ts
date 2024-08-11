import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { AnswersModule } from './modules/answers/answers.module';

@Module({
  imports: [DatabaseModule, QuestionsModule, ChannelsModule, AnswersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
