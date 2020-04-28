import { Controller, Get, Query } from '@nestjs/common';
import { StockFundamentalsService } from './stock-fundamentals.service';
import { BalanceSheetParams, BalanceSheetResponse, CashFlowParams, CashFlowResponse, DividendsRange, DividendsBasic, EarningsParams, EarningsResponse, FinancialsParams, FinancialsResponse, IncomeStatementResponse, IncomeStatementParams, SplitsBasic } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('stock-fundamentals')
@Controller('stock-fundamentals')
export class StockFundamentalsController {

  constructor(private stockFundamentalsService: StockFundamentalsService) {}

  @Get('/balance-sheet')
  async getBalanceSheet(
    @Query('symbol') symbol: string,
    @Query('params') params?: Partial<BalanceSheetParams>
  ): Promise<BalanceSheetResponse> {
    return await this.stockFundamentalsService.getBalanceSheet(symbol, params);
  }

  @Get('/cashflow')
  async getCashflow(
    @Query('symbol') symbol: string,
    @Query('params') params?: Partial<CashFlowParams>
  ): Promise<CashFlowResponse> {
    return await this.stockFundamentalsService.getCashflow(symbol, params);
  }

  @Get('/dividends-basic')
  async getDividendsBasic(
    @Query('symbol') symbol: string,
    @Query('params') range?: DividendsRange
  ): Promise<readonly DividendsBasic[]> {
    return await this.stockFundamentalsService.getDividendsBasic(symbol, range);
  }

  @Get('/earnings')
  async getEarnings(
    @Query('symbol') symbol: string,
    @Query('last') last?: number,
    @Query('field') field?: string,
    @Query('params') params?: EarningsParams
  ): Promise<EarningsResponse> {
    return await this.stockFundamentalsService.getEarnings(symbol, last, field, params);
  }

  @Get('/financials')
  async getFinancials(
    @Query('symbol') symbol: string,
    @Query('params') params?: FinancialsParams
  ): Promise<FinancialsResponse> {
    return await this.stockFundamentalsService.getFinancials(symbol, params);
  }

  @Get('/income-statement')
  async getIncomeStatement(
    @Query('symbol') symbol: string,
    @Query('params') params?: IncomeStatementParams): Promise<IncomeStatementResponse> {
    return await this.stockFundamentalsService.getIncomeStatement(symbol, params);
  }

  @Get('/splits-basic')
  async getSplitsBasic(
    @Query('symbol') symbol: string,
    @Query('range') range?: DividendsRange
  ): Promise<readonly SplitsBasic[]> {
    return await this.stockFundamentalsService.getSplitsBasic(symbol, range);
  }
}
