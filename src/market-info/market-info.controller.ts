import { Controller, Get, Query } from '@nestjs/common';
import { MarketInfoService } from './market-info.service';
import { CollectionType, Quote, EarningsTodayData, IPOCalendar } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('market-info')
@Controller('market-info')
export class MarketInfoController {

  constructor(private marketInfoService: MarketInfoService) {}

  @Get('/collections')
  async getCollections(
    @Query('type') collectionType: CollectionType,
    @Query('name') collectionName: string): Promise<readonly Quote[]> {
    return await this.marketInfoService.getCollections(collectionType, collectionName);
  }

  @Get('/earnings-today')
  async getEarningsToday(): Promise<EarningsTodayData> {
    return await this.marketInfoService.getEarningsToday();
  }

  @Get('/ipo-calendar')
  async getIpoCalendar(@Query('today') today?: boolean): Promise<IPOCalendar> {
    return await this.marketInfoService.getIpoCalendar(today);
  }
}
