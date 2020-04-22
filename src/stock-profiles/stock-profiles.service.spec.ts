import { Test, TestingModule } from '@nestjs/testing';
import { StockProfilesService } from './stock-profiles.service';

describe('StockProfilesService', () => {
  let service: StockProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockProfilesService],
    }).compile();

    service = module.get<StockProfilesService>(StockProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
