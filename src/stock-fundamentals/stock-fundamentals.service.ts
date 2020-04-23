import { Injectable } from '@nestjs/common';
import { BalanceSheetParams, BalanceSheetResponse, balanceSheet, cashflow, CashFlowResponse, CashFlowParams, DividendsRange, DividendsBasic, dividendsBasic, earnings, EarningsParams, EarningsResponse, FinancialsResponse, FinancialsParams, financials, IncomeStatementParams, IncomeStatementResponse, incomeStatement, SplitsBasic, splitsBasic } from 'iex-cloud';

@Injectable()
export class StockFundamentalsService {

  // https://iexcloud.io/docs/api/#balance-sheet
  async getBalanceSheet(symbol: string, params?: Partial<BalanceSheetParams>): Promise<BalanceSheetResponse> {
    return await balanceSheet(symbol, params);
  }

  // https://iexcloud.io/docs/api/#cash-flow
  async getCashflow(symbol: string, params?: Partial<CashFlowParams>): Promise<CashFlowResponse> {
    return await cashflow(symbol, params);
  }

  // https://iexcloud.io/docs/api/#dividends-basic
  async getDividendsBasic(symbol: string, range?: DividendsRange): Promise<readonly DividendsBasic[]> {
    return await dividendsBasic(symbol, range);
  }

  // https://iexcloud.io/docs/api/#earnings
  async getEarnings(symbol: string, last?: number, field?: string, params?: EarningsParams): Promise<EarningsResponse> {
    return await earnings(symbol, last, field, params);
  }

  // https://iexcloud.io/docs/api/#financials
  async getFinancials(symbol: string, params?: FinancialsParams): Promise<FinancialsResponse> {
    return await financials(symbol, params);
  }

  // https://iexcloud.io/docs/api/#income-statement
  async getIncomeStatement(symbol: string, params?: IncomeStatementParams): Promise<IncomeStatementResponse> {
    return await incomeStatement(symbol, params);
  }

  // https://iexcloud.io/docs/api/#splits-basic
  async getSplitsBasic(symbol: string, range?: DividendsRange): Promise<readonly SplitsBasic[]> {
    return await splitsBasic(symbol, range);
  }
}
