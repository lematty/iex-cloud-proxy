import { Controller, Get, Query } from '@nestjs/common';
import { ReferenceDataService, Input, Sector, Tag } from './reference-data.service';
import { CryptocurrencySymbol, FXSymbols, IEXSymbol, InternationalExchange, InternationalSymbol, ISINMapping, MutualFundSymbol, OptionsSymbol, OTCSymbol, Search, TradeSymbol, USExchange, USHolidaysAndTradingDate, TradingDatesType, TradingDatesDirection } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reference-data')
@Controller('reference-data')
export class ReferenceDataController {
  
  constructor(private referenceDataService: ReferenceDataService) {}

  @Get('/cryptocurrency-symbols')
  async getCryptocurrencySymbols(): Promise<readonly CryptocurrencySymbol[]> {
    return await this.referenceDataService.getCryptocurrencySymbols();
  }

  @Get('/fx-symbols')
  async getFxSymbols(): Promise<FXSymbols> {
    return await this.referenceDataService.getFxSymbols();
  }

  @Get('/iex-symbols')
  async getIexSymbols(): Promise<readonly IEXSymbol[]> {
    return await this.referenceDataService.getIexSymbols();
  }

  @Get('/international-exchange')
  async getInternationalExchanges(): Promise<readonly InternationalExchange[]> {
    return await this.referenceDataService.getInternationalExchanges();
  }

  @Get('/international-symbols')
  async getInternationalSymbols({ region, exchange }: Input): Promise<readonly InternationalSymbol[]> {
    return await this.referenceDataService.getInternationalSymbols({ region, exchange });
  }

  @Get('/isin-mapping')
  async getIsinMapping(): Promise<ISINMapping> {
    return await this.referenceDataService.getIsinMapping();
  }

  @Get('/mutual-fund-symbols')
  async getMutualFundSymbols(): Promise<readonly MutualFundSymbol[]> {
    return await this.referenceDataService.getMutualFundSymbols();
  }

  @Get('/options-symbols')
  async getOptionsSymbols(): Promise<readonly OptionsSymbol[]> {
    return await this.referenceDataService.getOptionsSymbols();
  }

  @Get('/otc-symbols')
  async getOtcSymbols(): Promise<readonly OTCSymbol[]> {
    return await this.referenceDataService.getOtcSymbols();
  }

  @Get('/search')
  async getSearch(fragment: string): Promise<readonly Search[]> {
    return await this.referenceDataService.getSearch(fragment);
  }

  @Get('/sectors')
  async getSectors(): Promise<readonly Sector[]> {
    return await this.referenceDataService.getSectors();
  }

  @Get('/symbols')
  async getSymbols(): Promise<readonly TradeSymbol[]> {
    return await this.referenceDataService.getSymbols();
  }

  @Get('/tags')
  async getTags(): Promise<readonly Tag[]> {
    return await this.referenceDataService.getTags();
  }

  @Get('/us-exchange')
  async getUSExchanges(): Promise<readonly USExchange[]> {
    return await this.referenceDataService.getUSExchanges();
  }

  @Get('/us-holidays-and-trading-date')
  async getUsHolidaysAndTradingDates(
    @Query('type') type: TradingDatesType,
    @Query('direction') direction?: TradingDatesDirection,
    @Query('last') last?: number,
    @Query('start') startDate?: string
  ): Promise<readonly USHolidaysAndTradingDate[]> {
    return await this.referenceDataService.getUsHolidaysAndTradingDates(type, direction, last, startDate);
  }
}
