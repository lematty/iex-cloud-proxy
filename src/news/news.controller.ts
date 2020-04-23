import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from 'iex-cloud';

@Controller('news')
export class NewsController {

  constructor(private newsService: NewsService) {}

  @Get()
  async getCollections(
    @Query('symbol') symbol: string,
    @Query('last') last?: number
  ): Promise<readonly News[]> {
    return await this.newsService.getCollections(symbol, last);
  }
}
