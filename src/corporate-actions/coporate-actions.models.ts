import {
  BonusIssue as BonusIssueModel,
  Distribution as DistributionModel
} from 'iex-cloud';

export interface BonusIssue extends BonusIssueModel {
  readonly id: string;
  readonly source: string;
  readonly key: string;
  readonly subkey: string;
  readonly date: number;
  readonly updated: number;
}

export interface Distribution extends Omit<DistributionModel, 'hasWithdrawalRights' | 'announceDate'> {
  hasWithdrawalRights: number;
  id: string;
  source: string;
  key: string;
  subkey: string;
  date: number;
  updated: number;
}