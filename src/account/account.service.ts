import { Injectable } from '@nestjs/common';
import { messageBudget, metadata, Metadata, payAsYouGo, usage } from 'iex-cloud';

@Injectable()
export class AccountService {

  // https://iexcloud.io/docs/api/#message-budget
  async getMessageBudget(totalMessages: number): Promise<any> {
    return await messageBudget(totalMessages);
  }

  // https://iexcloud.io/docs/api/#metadata
  async getMetadata(): Promise<Metadata> {
    return await metadata();
  }

  // https://iexcloud.io/docs/api/#pay-as-you-go
  async getPayAsYouGo(allow: boolean): Promise<any> {
    return await payAsYouGo(allow);
  }

  // https://iexcloud.io/docs/api/#usage
  async getUsage(type?: string): Promise<any> {
    return await usage(type);
  }
}
