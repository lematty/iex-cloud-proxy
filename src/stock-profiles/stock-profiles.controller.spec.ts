import { Test, TestingModule } from '@nestjs/testing';
import { StockProfilesController } from './stock-profiles.controller';

describe('StockProfiles Controller', () => {
  let controller: StockProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockProfilesController],
    }).compile();

    controller = module.get<StockProfilesController>(StockProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
