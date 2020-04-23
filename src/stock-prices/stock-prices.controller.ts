import { Controller, Get, Query } from '@nestjs/common';
import { StockPricesService } from './stock-prices.service';
import { Book, DelayedQuote, HistoricalPriceParams, HistoricalPrice, IntradayPriceParams, IntradayPrice, LargestTrade, OHLC, Quote, VolumeByVenue } from 'iex-cloud';

@Controller('stock-prices')
export class StockPricesController {

  constructor(private stockPricesService: StockPricesService) {}

  @Get('/book')
  async getBook(@Query('symbol') symbol: string): Promise<Book> {
    return await this.stockPricesService.getBook(symbol);
  }

  @Get('/book')
  async getDelayedQuote(@Query('symbol') symbol: string): Promise<DelayedQuote> {
    return await this.stockPricesService.getDelayedQuote(symbol);
  }

  @Get('/historical-prices')
  async getHistoricalPrices(
    @Query('symbol') symbol: string,
    @Query('range') range?: string,
    @Query('date') date?: string,
    @Query('params') params?: Partial<HistoricalPriceParams>
  ): Promise<readonly Partial<HistoricalPrice>[]> {
    return await this.stockPricesService.getHistoricalPrices(symbol, range, date, params);
  }

  @Get('/intraday-prices')
  async getIntradayPrices(
    @Query('symbol') symbol: string,
    @Query('params') params?: Partial<IntradayPriceParams>
  ): Promise<readonly Partial<IntradayPrice>[]> {
    return await this.stockPricesService.getIntradayPrices(symbol, params);
  }

  @Get('/largest-trades')
  async getLargestTrades(@Query('symbol') symbol: string): Promise<readonly Partial<LargestTrade>[]> {
    return await this.stockPricesService.getLargestTrades(symbol);
  }

  @Get('/ohlc')
  async getOhlc(@Query('symbol') symbol: string): Promise<OHLC> {
    return await this.stockPricesService.getOhlc(symbol);
  }

  @Get('/previous-day-price')
  async getPreviousDayPrice(@Query('symbol') symbol: string): Promise<Partial<HistoricalPrice>> {
    return await this.stockPricesService.getPreviousDayPrice(symbol);
  }

  @Get('/previous-day-prices')
  async getPreviousDayPrices(): Promise<readonly Partial<HistoricalPrice>[]> {
    return await this.stockPricesService.getPreviousDayPrices();
  }

  @Get('/price-only')
  async getPriceOnly(@Query('symbol') symbol: string): Promise<number> {
    return await this.stockPricesService.getPriceOnly(symbol);
  }

  @Get('/quote')
  async getQuote(
    @Query('symbol') symbol: string,
    @Query('field') field?: string
  ): Promise<Quote> {
    return await this.stockPricesService.getQuote(symbol, field);
  }

  @Get('/volume-by-venue')
  async getVolumeByVenue(@Query('symbol') symbol: string): Promise<VolumeByVenue> {
    return await this.stockPricesService.getVolumeByVenue(symbol);
  }
}
