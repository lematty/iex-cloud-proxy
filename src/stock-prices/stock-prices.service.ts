import { Injectable } from '@nestjs/common';
import { Book, book, delayedQuote, DelayedQuote, HistoricalPriceParams, HistoricalPrice, historicalPrices, IntradayPriceParams, IntradayPrice, intradayPrices, LargestTrade, largestTrades, OHLC, ohlc, previousDayPrice, previousDayPrices, priceOnly, Quote, quote, VolumeByVenue, volumeByVenue } from 'iex-cloud';

@Injectable()
export class StockPricesService {

  // https://iexcloud.io/docs/api/#book
  async getBook(symbol: string): Promise<Book> {
    return await book(symbol);
  }

  // https://iexcloud.io/docs/api/#delayed-quote
  async getDelayedQuote(symbol: string): Promise<DelayedQuote> {
    return await delayedQuote(symbol);
  }

  // https://iexcloud.io/docs/api/#historical-prices
  async getHistoricalPrices(symbol: string, range?: string, date?: string, params?: Partial<HistoricalPriceParams>): Promise<readonly Partial<HistoricalPrice>[]> {
    return await historicalPrices(symbol, range, date, params);
  }

  // https://iexcloud.io/docs/api/#intraday-prices
  async getIntradayPrices(symbol: string, params?: Partial<IntradayPriceParams>): Promise<readonly Partial<IntradayPrice>[]> {
    return await intradayPrices(symbol, params);
  }

  // https://iexcloud.io/docs/api/#largest-trades
  async getLargestTrades(symbol: string): Promise<readonly Partial<LargestTrade>[]> {
    return await largestTrades(symbol);
  }

  // https://iexcloud.io/docs/api/#ohlc
  async getOhlc(symbol: string): Promise<OHLC> {
    return await ohlc(symbol);
  }

  // https://iexcloud.io/docs/api/#previous-day-price
  async getPreviousDayPrice(symbol: string): Promise<Partial<HistoricalPrice>> {
    return await previousDayPrice(symbol);
  }

  // https://iexcloud.io/docs/api/#previous-day-price
  async getPreviousDayPrices(): Promise<readonly Partial<HistoricalPrice>[]> {
    return await previousDayPrices();
  }

  // https://iexcloud.io/docs/api/#price-only
  async getPriceOnly(symbol: string): Promise<number> {
    return await priceOnly(symbol);
  }

  // https://iexcloud.io/docs/api/#quote
  async getQuote(symbol: string, field?: string): Promise<Quote> {
    return await quote(symbol, field);
  }

  // https://iexcloud.io/docs/api/#volume-by-venue
  async getVolumeByVenue(symbol: string): Promise<VolumeByVenue> {
    return await volumeByVenue(symbol);
  }
}
