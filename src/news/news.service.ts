import { Injectable } from '@nestjs/common';
import { News, news } from 'iex-cloud';

@Injectable()
export class NewsService {

  // https://iexcloud.io/docs/api/#news
  async getCollections(symbol: string, last?: number): Promise<readonly News[]> {
    return await news(symbol, last);
  }
}
