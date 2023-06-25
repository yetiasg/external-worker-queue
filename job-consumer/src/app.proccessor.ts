import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueProgress,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';

@Processor('report')
export class ReportProccessor {
  @OnQueueActive()
  a() {
    console.log('a');
  }

  @OnQueueProgress()
  b() {
    console.log('b');
  }

  @OnQueueCompleted()
  c() {
    console.log('c');
  }

  @Process('analyze')
  async aaa(job: Job) {
    setTimeout(() => {
      console.log('elo');
    }, 2000);
    console.log('siemanko', { jobId: job.id, name: job.data.name });
  }
}
