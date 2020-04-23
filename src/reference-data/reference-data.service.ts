import { Injectable } from '@nestjs/common';
import { CryptocurrencySymbol, cryptocurrencySymbols, FXSymbols, fxSymbols, IEXSymbol, iexSymbols, internationalExchanges, InternationalExchange, internationalSymbols, InternationalSymbol, ISINMapping, isinMapping, mutualFundSymbols, MutualFundSymbol, optionsSymbols, OptionsSymbol, OTCSymbol, otcSymbols, Search, search, sectors, TradeSymbol, symbols, tags, USExchange, uSExchanges, usHolidaysAndTradingDates, USHolidaysAndTradingDate, TradingDatesType, TradingDatesDirection } from 'iex-cloud';

export interface Input {
  readonly region?: string;
  readonly exchange?: string;
}
export interface Sector {
  readonly name: string;
}

export interface Tag {
  readonly name: string
}

@Injectable()
export class ReferenceDataService {

    // https://iexcloud.io/docs/api/#cryptocurrency-symbols
    async getCryptocurrencySymbols(): Promise<readonly CryptocurrencySymbol[]> {
      return await cryptocurrencySymbols();
    }

    // https://iexcloud.io/docs/api/#fx-symbols
    async getFxSymbols(): Promise<FXSymbols> {
      return await fxSymbols();
    }

    // https://iexcloud.io/docs/api/#iex-symbols
    async getIexSymbols(): Promise<readonly IEXSymbol[]> {
      return await iexSymbols();
    }

    // https://iexcloud.io/docs/api/#international-exchanges
    async getInternationalExchanges(): Promise<readonly InternationalExchange[]> {
      return await internationalExchanges();
    }

    // https://iexcloud.io/docs/api/#international-symbols
    async getInternationalSymbols({ region, exchange }: Input): Promise<readonly InternationalSymbol[]> {
      return await internationalSymbols({ region, exchange });
    }

    // https://iexcloud.io/docs/api/#isin-mapping
    async getIsinMapping(): Promise<ISINMapping> {
      return await isinMapping();
    }

    // https://iexcloud.io/docs/api/#mutual-fund-symbols
    async getMutualFundSymbols(): Promise<readonly MutualFundSymbol[]> {
      return await mutualFundSymbols();
    }

    // https://iexcloud.io/docs/api/#options-symbols
    async getOptionsSymbols(): Promise<readonly OptionsSymbol[]> {
      return await optionsSymbols();
    }

    // https://iexcloud.io/docs/api/#otc-symbols
    async getOtcSymbols(): Promise<readonly OTCSymbol[]> {
      return await otcSymbols();
    }
 
    // https://iexcloud.io/docs/api/#search
    async getSearch(fragment: string): Promise<readonly Search[]> {
      return await search(fragment);
    }

    // https://iexcloud.io/docs/api/#sectors
    async getSectors(): Promise<readonly Sector[]> {
      return await sectors();
    }

    // https://iexcloud.io/docs/api/#symbols
    async getSymbols(): Promise<readonly TradeSymbol[]> {
      return await symbols();
    }

    // https://iexcloud.io/docs/api/#tags
    async getTags(): Promise<readonly Tag[]> {
      return await tags();
    }

    // https://iexcloud.io/docs/api/#u-s-exchanges
    async getUSExchanges(): Promise<readonly USExchange[]> {
      return await uSExchanges();
    }

    // https://iexcloud.io/docs/api/#u-s-holidays-and-trading-dates
    async getUsHolidaysAndTradingDates(
      type: TradingDatesType,
      direction?: TradingDatesDirection,
      last?: number,
      startDate?: string
      ): Promise<readonly USHolidaysAndTradingDate[]> {
      return await usHolidaysAndTradingDates(type, direction, last, startDate);
    }






}
