import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceDataController } from './reference-data.controller';
import { ReferenceDataService } from './reference-data.service';

describe('ReferenceData Controller', () => {
  let controller: ReferenceDataController;
  let service: ReferenceDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceDataController],
      providers: [ReferenceDataService],
    }).compile();

    controller = module.get<ReferenceDataController>(ReferenceDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
