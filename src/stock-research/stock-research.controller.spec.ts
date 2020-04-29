import { Test, TestingModule } from '@nestjs/testing';
import { StockResearchController } from './stock-research.controller';
import { StockResearchService } from './stock-research.service';

describe('StockResearch Controller', () => {
  let controller: StockResearchController;
  let service: StockResearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockResearchController],
      providers: [StockResearchService],
    }).compile();

    controller = module.get<StockResearchController>(StockResearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
