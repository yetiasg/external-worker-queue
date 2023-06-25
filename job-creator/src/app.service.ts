import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('report') private readonly reportQueue: Queue) {}

  async getHello(): Promise<string> {
    try {
      const a = await this.reportQueue.add(
        'analyze',
        { name: 'Mati' },
        {
          attempts: 2,
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
      console.log({ a });
    } catch (e) {
      console.log({ e });
    }
    return 'Hello World!';
  }
}
