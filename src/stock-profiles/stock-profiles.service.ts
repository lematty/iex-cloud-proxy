import { Injectable } from '@nestjs/common';
import { Company, company, InsiderRoster, insiderRoster, InsiderSummary, insiderSummary, InsiderTransactions, insiderTransactions, Logo, logo, peerGroups } from 'iex-cloud';

@Injectable()
export class StockProfilesService {

  // https://iexcloud.io/docs/api/#company
  async getCompany(symbol: string): Promise<Company> {
    return await company(symbol);
  }

  // https://iexcloud.io/docs/api/#insider-roster
  async getInsiderRoster(symbol: string): Promise<readonly InsiderRoster[]> {
    return await insiderRoster(symbol);
  }

  // https://iexcloud.io/docs/api/#insider-summary
  async getInsiderSummary(symbol: string): Promise<readonly InsiderSummary[]> {
    return await insiderSummary(symbol);
  }

  // https://iexcloud.io/docs/api/#insider-transactions
  async getInsiderTransactions(symbol: string): Promise<readonly InsiderTransactions[]> {
    return await insiderTransactions(symbol);
  }

  // https://iexcloud.io/docs/api/#logo
  async getLogo(symbol: string): Promise<Logo> {
    return await logo(symbol);
  }

  // https://iexcloud.io/docs/api/#peer-groups
  async getPeerGroups(symbol: string): Promise<readonly string[]> {
    return await peerGroups(symbol);
  }
}
