import { Test, TestingModule } from '@nestjs/testing';
import { GuidesController } from './guides.controller';

describe('Guides Controller', () => {
  let controller: GuidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuidesController],
    }).compile();

    controller = module.get<GuidesController>(GuidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
