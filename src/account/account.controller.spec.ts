import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Metadata } from 'iex-cloud';
import { Type, Usage } from './account.models';

describe('Account Controller', () => {
  let controller: AccountController;
  let service: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [AccountService]
    }).compile();

    controller = module.get<AccountController>(AccountController);
    service = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMessageBudget', () => {
    it('should return an array of cats', async () => {
      const totalMessages = 5;
      jest.spyOn(service, 'getMessageBudget');
      await controller.getMessageBudget(totalMessages);

      expect(service.getMessageBudget).toHaveBeenCalled();
    });
  });

  describe('getMetadata', () => {
    it('should return an array of cats', async () => {
      const result: Metadata = {
        payAsYouGoEnabled: true,
        effectiveDate: new Date(1547590582000), // dunno if dates are correct
        endDateEffective: new Date(1547830921000), // dunno if dates are correct
        subscriptionTermType: 'monthly',
        tierName: 'launch',
        messageLimit: 1000000000,
        messagesUsed: 215141655,
        circuitBreaker: 3000000000
      };
      jest.spyOn(service, 'getMetadata').mockResolvedValue(result);

      expect(await controller.getMetadata()).toBe(result);
    });
  });

  describe('getPayAsYouGo', () => {
    it('should return an array of cats', async () => {
      const allow = false;
      jest.spyOn(service, 'getPayAsYouGo');
      await controller.getPayAsYouGo(allow)
      
      expect(service.getPayAsYouGo).toHaveBeenCalled();
    });
  });

  describe('getUsage', () => {
    it('should return an array of cats', async () => {
      const result: Usage = {
        monthlyUsage: 215200,
        monthlyPayAsYouGo: 0,
        dailyUsage: {
            20190120: 115200, 
            20190121: 100000
        },
        tokenUsage: {
            pk_123: 215200
        },
        keyUsage: {
            IEX_STATS: 0, 
            EARNINGS: 115200, 
            STOCK_QUOTES: 100000
        }
      }
      const type: Type = 'messages';
      jest.spyOn(service, 'getUsage').mockResolvedValue(result);

      expect(await controller.getUsage(type)).toBe(result);
    });
  });
});
