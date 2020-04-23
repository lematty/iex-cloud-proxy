import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

  constructor(private newsService: NewsService) {}

  @Get()
  async getCollections(
    @Query('symbol') symbol: string, last?: number): Promise<readonly News[]> {
    return await this.newsService.getCollections(symbol, last);
  }
}
