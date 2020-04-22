import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceDataController } from './reference-data.controller';

describe('ReferenceData Controller', () => {
  let controller: ReferenceDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceDataController],
    }).compile();

    controller = module.get<ReferenceDataController>(ReferenceDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
