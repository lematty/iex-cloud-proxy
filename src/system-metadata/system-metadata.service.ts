import { Injectable } from '@nestjs/common';
import { Status, status } from 'iex-cloud';

@Injectable()
export class SystemMetadataService {

  // https://iexcloud.io/docs/api/#status
  async getStatus(): Promise<Status> {
    return await status();
  }
}
