import { Test, TestingModule } from '@nestjs/testing';
import { StockFundamentalsController } from './stock-fundamentals.controller';

describe('StockFundamentals Controller', () => {
  let controller: StockFundamentalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockFundamentalsController],
    }).compile();

    controller = module.get<StockFundamentalsController>(StockFundamentalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
