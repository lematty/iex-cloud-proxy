import { Test, TestingModule } from '@nestjs/testing';
import { MarketInfoController } from './market-info.controller';
import { MarketInfoService } from './market-info.service';

describe('MarketInfo Controller', () => {
  let controller: MarketInfoController;
  let service: MarketInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketInfoController],
      providers: [MarketInfoService],
    }).compile();

    controller = module.get<MarketInfoController>(MarketInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
