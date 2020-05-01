import { Controller, Get, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { Metadata } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';
import { Type, Usage } from './account.models';

@ApiTags('account')
@Controller('account')
export class AccountController {

  constructor(private accountService: AccountService) {}

  @Get('/message-budget')
  async getMessageBudget(@Query('messages') totalMessages: number): Promise<void> {
    return await this.accountService.getMessageBudget(totalMessages);
  }

  @Get('/metadata')
  async getMetadata(): Promise<Metadata> {
    return await this.accountService.getMetadata();
  }

  @Get('/pay-as-you-go')
  async getPayAsYouGo(@Query('allow') allow: boolean): Promise<void> {
    return await this.accountService.getPayAsYouGo(allow);
  }

  @Get('/usage')
  async getUsage(@Query('type') type?: Type): Promise<Usage> {
    return await this.accountService.getUsage(type);
  }
}
