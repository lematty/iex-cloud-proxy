import { Test, TestingModule } from '@nestjs/testing';
import { StockProfilesController } from './stock-profiles.controller';
import { StockProfilesService } from './stock-profiles.service';

describe('StockProfiles Controller', () => {
  let controller: StockProfilesController;
  let service: StockProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockProfilesController],
      providers: [StockProfilesService],
    }).compile();

    controller = module.get<StockProfilesController>(StockProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
