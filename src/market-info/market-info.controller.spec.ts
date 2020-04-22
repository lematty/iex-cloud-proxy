import { Test, TestingModule } from '@nestjs/testing';
import { MarketInfoController } from './market-info.controller';

describe('MarketInfo Controller', () => {
  let controller: MarketInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketInfoController],
    }).compile();

    controller = module.get<MarketInfoController>(MarketInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
