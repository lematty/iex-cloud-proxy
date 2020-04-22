import { Test, TestingModule } from '@nestjs/testing';
import { MarketInfoService } from './market-info.service';

describe('MarketInfoService', () => {
  let service: MarketInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketInfoService],
    }).compile();

    service = module.get<MarketInfoService>(MarketInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
