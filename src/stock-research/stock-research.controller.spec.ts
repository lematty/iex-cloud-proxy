import { Test, TestingModule } from '@nestjs/testing';
import { StockResearchController } from './stock-research.controller';

describe('StockResearch Controller', () => {
  let controller: StockResearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockResearchController],
    }).compile();

    controller = module.get<StockResearchController>(StockResearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
