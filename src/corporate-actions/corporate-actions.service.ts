import { Injectable } from '@nestjs/common';
import { bonusIssue, distribution, dividends, Dividend, ReturnOfCapital, returnOfCapital, RightsIssue, rightsIssue, RightsToPurchase, rightsToPurchase, SecurityReclassification, securityReclassification, SecuritySwap, securitySwap, Spinoff, spinoff, splits, Split } from 'iex-cloud';
import { BonusIssue, Distribution } from './coporate-actions.models';

@Injectable()
export class CorporateActionsService {

  // https://iexcloud.io/docs/api/#bonus-issue
  async getBonusIssue(symbol?: string, refid?: string): Promise<readonly BonusIssue[]> {
    return await bonusIssue(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#distribution
  async getDistribution(symbol?: string, refid?: string): Promise<readonly Distribution[]> {
    return await distribution(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#dividends
  async getDividends(symbol?: string, refid?: string): Promise<readonly Dividend[]> {
    return await dividends(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#return-of-capital
  async getReturnOfCapital(symbol?: string, refid?: string): Promise<readonly ReturnOfCapital[]> {
    return await returnOfCapital(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#rights-issue
  async getRightsIssue(symbol?: string, refid?: string): Promise<readonly RightsIssue[]> {
    return await rightsIssue(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#right-to-purchase
  async getRightsToPurchase(symbol?: string, refid?: string): Promise<readonly RightsToPurchase[]> {
    return await rightsToPurchase(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#security-reclassification
  async getSecurityReclassification(symbol?: string, refid?: string): Promise<readonly SecurityReclassification[]> {
    return await securityReclassification(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#security-swap
  async getSecuritySwap(symbol?: string, refid?: string): Promise<readonly SecuritySwap[]> {
    return await securitySwap(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#spinoff
  async getSpinoff(symbol?: string, refid?: string): Promise<readonly Spinoff[]> {
    return await spinoff(symbol, refid);
  }

  // https://iexcloud.io/docs/api/#splits
  async getSplits(symbol?: string, refid?: string): Promise<readonly Split[]> {
    return await splits(symbol, refid);
  }


}
