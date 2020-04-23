import { Injectable } from '@nestjs/common';
import { AdvancedStats, advancedStats, AnalystRecommendation, analystRecommendations, EstimatesParams, EstimatesData, estimates, FundOwnership, fundOwnership, InstitutionalOwnership, institutionalOwnership, KeyStat, keyStats, PriceTarget, priceTarget } from 'iex-cloud';

@Injectable()
export class StockResearchService {

  // https://iexcloud.io/docs/api/#advanced-stats
  async getAdvancedStats(symbol: string): Promise<AdvancedStats> {
    return await advancedStats(symbol);
  }

  // https://iexcloud.io/docs/api/#analyst-recommendations
  async getAnalystRecommendations(symbol: string): Promise<readonly Partial<AnalystRecommendation>[]> {
    return await analystRecommendations(symbol);
  }

  // https://iexcloud.io/docs/api/#estimates
  async getEstimates(symbol: string, params?: EstimatesParams): Promise<EstimatesData> {
    return await estimates(symbol, params);
  }

  // https://iexcloud.io/docs/api/#fund-ownership
  async getFundOwnership(symbol: string): Promise<readonly FundOwnership[]> {
    return await fundOwnership(symbol);
  }

  // https://iexcloud.io/docs/api/#institutional-ownership
  async getInstitutionalOwnership(symbol: string): Promise<readonly InstitutionalOwnership[]> {
    return await institutionalOwnership(symbol);
  }

  // https://iexcloud.io/docs/api/#key-stats
  async getKeyStats(symbol: string, stat?: string): Promise<string | number | KeyStat> {
    return await keyStats(symbol, stat);
  }

  // https://iexcloud.io/docs/api/#price-target
  async getPriceTarget(symbol: string): Promise<PriceTarget> {
    return await priceTarget(symbol);
  }
}
