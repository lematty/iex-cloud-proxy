import { Test, TestingModule } from '@nestjs/testing';
import { StockPricesController } from './stock-prices.controller';

describe('StockPrices Controller', () => {
  let controller: StockPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockPricesController],
    }).compile();

    controller = module.get<StockPricesController>(StockPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
