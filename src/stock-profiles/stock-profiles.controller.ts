import { Controller, Get, Query } from '@nestjs/common';
import { StockProfilesService } from './stock-profiles.service';
import { Company, InsiderRoster, InsiderSummary, InsiderTransactions, Logo } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('stock-profiles')
@Controller('stock-profiles')
export class StockProfilesController {

  constructor(private stockProfilesService: StockProfilesService) {}

  @Get('/company')
  async getCompany(@Query('symbol') symbol: string): Promise<Company> {
    return await this.stockProfilesService.getCompany(symbol);
  }

  @Get('/insider-roster')
  async getInsiderRoster(@Query('symbol') symbol: string): Promise<readonly InsiderRoster[]> {
    return await this.stockProfilesService.getInsiderRoster(symbol);
  }

  @Get('/insider-summary')
  async getInsiderSummary(@Query('symbol') symbol: string): Promise<readonly InsiderSummary[]> {
    return await this.stockProfilesService.getInsiderSummary(symbol);
  }

  @Get('/insider-transactions')
  async getInsiderTransactions(@Query('symbol') symbol: string): Promise<readonly InsiderTransactions[]> {
    return await this.stockProfilesService.getInsiderTransactions(symbol);
  }

  @Get('/logo')
  async getLogo(@Query('symbol') symbol: string): Promise<Logo> {
    return await this.stockProfilesService.getLogo(symbol);
  }

  @Get('/peer-groups')
  async getPeerGroups(@Query('symbol') symbol: string): Promise<readonly string[]> {
    return await this.stockProfilesService.getPeerGroups(symbol);
  }
}
