import { Test, TestingModule } from '@nestjs/testing';
import { StockFundamentalsService } from './stock-fundamentals.service';

describe('StockFundamentalsService', () => {
  let service: StockFundamentalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockFundamentalsService],
    }).compile();

    service = module.get<StockFundamentalsService>(StockFundamentalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
