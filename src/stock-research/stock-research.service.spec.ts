import { Test, TestingModule } from '@nestjs/testing';
import { StockResearchService } from './stock-research.service';

describe('StockResearchService', () => {
  let service: StockResearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockResearchService],
    }).compile();

    service = module.get<StockResearchService>(StockResearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
