import { Injectable } from '@nestjs/common';
import { messageBudget, metadata, Metadata, payAsYouGo, usage } from 'iex-cloud';
import { Usage, Type } from './account.models';

@Injectable()
export class AccountService {

  // https://iexcloud.io/docs/api/#message-budget
  async getMessageBudget(totalMessages: number): Promise<void> {
    return await messageBudget(totalMessages);
  }

  // https://iexcloud.io/docs/api/#metadata
  async getMetadata(): Promise<Metadata> {
    return await metadata();
  }

  // https://iexcloud.io/docs/api/#pay-as-you-go
  async getPayAsYouGo(allow: boolean): Promise<void> {
    return await payAsYouGo(allow);
  }

  // https://iexcloud.io/docs/api/#usage
  async getUsage(type?: Type): Promise<Usage> {
    return await usage(type);
  }
}
