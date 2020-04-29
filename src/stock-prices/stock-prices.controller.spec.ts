import { Test, TestingModule } from '@nestjs/testing';
import { StockPricesController } from './stock-prices.controller';
import { StockPricesService } from './stock-prices.service';

describe('StockPrices Controller', () => {
  let controller: StockPricesController;
  let service: StockPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockPricesController],
      providers: [StockPricesService],
    }).compile();

    controller = module.get<StockPricesController>(StockPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
