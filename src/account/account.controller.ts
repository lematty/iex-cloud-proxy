import { Controller, Get, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { Metadata } from 'iex-cloud';

@Controller('account')
export class AccountController {

  constructor(private accountService: AccountService) {}

  @Get('/message-budget')
  async getMessageBudget(@Query('messages') totalMessages: number): Promise<any> {
    return await this.accountService.getMessageBudget(totalMessages);
  }

  @Get('/metadata')
  async getMetadata(): Promise<Metadata> {
    return await this.accountService.getMetadata();
  }

  @Get('/pay-as-you-go')
  async getPayAsYouGo(@Query('allow') allow: boolean): Promise<any> {
    return await this.accountService.getPayAsYouGo(allow);
  }

  @Get('/usage')
  async getUsage(@Query('type') type?: string): Promise<any> {
    return await this.accountService.getUsage(type);
  }
}
