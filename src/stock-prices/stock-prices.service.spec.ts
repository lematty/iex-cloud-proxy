import { Test, TestingModule } from '@nestjs/testing';
import { StockPricesService } from './stock-prices.service';

describe('StockPricesService', () => {
  let service: StockPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockPricesService],
    }).compile();

    service = module.get<StockPricesService>(StockPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
