import { Controller, Get, Query } from '@nestjs/common';
import { StockResearchService } from './stock-research.service';
import { AdvancedStats, AnalystRecommendation, EstimatesParams, EstimatesData, FundOwnership, InstitutionalOwnership, KeyStat, PriceTarget } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('stock-research')
@Controller('stock-research')
export class StockResearchController {

  constructor(private stockResearchService: StockResearchService) {}

  @Get('/advanced-stats')
  async getAdvancedStats(@Query('symbol') symbol: string): Promise<AdvancedStats> {
    return await this.stockResearchService.getAdvancedStats(symbol);
  }

  @Get('/analyst-recommendations')
  async getAnalystRecommendations(@Query('symbol') symbol: string): Promise<readonly Partial<AnalystRecommendation>[]> {
    return await this.stockResearchService.getAnalystRecommendations(symbol);
  }

  @Get('/estimates')
  async getEstimates(
    @Query('symbol') symbol: string,
    @Query('params') params?: EstimatesParams
  ): Promise<EstimatesData> {
    return await this.stockResearchService.getEstimates(symbol, params);
  }

  @Get('/fund-ownership')
  async getFundOwnership(@Query('symbol') symbol: string): Promise<readonly FundOwnership[]> {
    return await this.stockResearchService.getFundOwnership(symbol);
  }

  @Get('/institutional-ownership')
  async getInstitutionalOwnership(@Query('symbol') symbol: string): Promise<readonly InstitutionalOwnership[]> {
    return await this.stockResearchService.getInstitutionalOwnership(symbol);
  }

  @Get('/key-stats')
  async getKeyStats(
    @Query('symbol') symbol: string,
    @Query('stat') stat?: string
  ): Promise<string | number | KeyStat> {
    return await this.stockResearchService.getKeyStats(symbol, stat);
  }

  @Get('/price-target')
  async getPriceTarget(@Query('symbol') symbol: string): Promise<PriceTarget> {
    return await this.stockResearchService.getPriceTarget(symbol);
  }
}
