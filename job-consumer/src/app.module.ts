import { Module } from '@nestjs/common';
import { ReportProccessor } from './app.proccessor';
import { BullModule } from '@nestjs/bull';

@Module({
  providers: [ReportProccessor],
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      defaultJobOptions: {
        removeOnComplete: true,
      },
    }),
    BullModule.registerQueue({ name: 'report' }),
  ],
})
export class AppModule {}
