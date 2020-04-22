import { Injectable } from '@nestjs/common';
import { Quote, CollectionType, collections, EarningsTodayData, earningsToday, IPOCalendar, ipoCalendar } from 'iex-cloud';

@Injectable()
export class MarketInfoService {

  // https://iexcloud.io/docs/api/#collections
  async getCollections(collectionType: CollectionType, collectionName: string): Promise<readonly Quote[]> {
    return await collections(collectionType, collectionName);
  }

  // https://iexcloud.io/docs/api/#earnings-today
  async getEarningsToday(): Promise<EarningsTodayData> {
    return await earningsToday();
  }

  // https://iexcloud.io/docs/api/#ipo-calendar
  async getIpoCalendar(today?: boolean): Promise<IPOCalendar> {
    return await ipoCalendar(today);
  }
}
