import { Test, TestingModule } from '@nestjs/testing';
import { StockFundamentalsController } from './stock-fundamentals.controller';
import { StockFundamentalsService } from './stock-fundamentals.service';

describe('StockFundamentals Controller', () => {
  let controller: StockFundamentalsController;
  let service: StockFundamentalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockFundamentalsController],
      providers: [StockFundamentalsService],
    }).compile();

    controller = module.get<StockFundamentalsController>(StockFundamentalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
