import { Controller, Get, Query } from '@nestjs/common';
import { CorporateActionsService } from './corporate-actions.service';
import { BonusIssue, Distribution, Dividend, ReturnOfCapital, RightsIssue, RightsToPurchase, SecurityReclassification, SecuritySwap, Spinoff, Split } from 'iex-cloud';

@Controller('corporate-actions')
export class CorporateActionsController {

  constructor(private corporateActionsService: CorporateActionsService) {}

  @Get('/bonus-issue')
  async getBonusIssue(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly BonusIssue[]> {
    return await this.corporateActionsService.getBonusIssue(symbol, refid);
  }

  @Get('/distribution')
  async getDistribution(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly Distribution[]> {
    return await this.corporateActionsService.getDistribution(symbol, refid);
  }

  @Get('/dividends')
  async getDividends(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly Dividend[]> {
    return await this.corporateActionsService.getDividends(symbol, refid);
  }

  @Get('/return-of-capital')
  async getReturnOfCapital(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly ReturnOfCapital[]> {
    return await this.corporateActionsService.getReturnOfCapital(symbol, refid);
  }

  @Get('/rights-issue')
  async getRightsIssue(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly RightsIssue[]> {
    return await this.corporateActionsService.getRightsIssue(symbol, refid);
  }

  @Get('/rights-to-purchase')
  async getRightsToPurchase(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly RightsToPurchase[]> {
    return await this.corporateActionsService.getRightsToPurchase(symbol, refid);
  }

  @Get('/security-reclassification')
  async getSecurityReclassification(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly SecurityReclassification[]> {
    return await this.corporateActionsService.getSecurityReclassification(symbol, refid);
  }

  @Get('/security-swap')
  async getSecuritySwap(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly SecuritySwap[]> {
    return await this.corporateActionsService.getSecuritySwap(symbol, refid);
  }

  @Get('/spinoff')
  async getSpinoff(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly Spinoff[]> {
    return await this.corporateActionsService.getSpinoff(symbol, refid);
  }

  @Get('/splits')
  async getSplits(
    @Query('symbol') symbol?: string,
    @Query('refid') refid?: string,
    ): Promise<readonly Split[]> {
    return await this.corporateActionsService.getSplits(symbol, refid);
  }
}
