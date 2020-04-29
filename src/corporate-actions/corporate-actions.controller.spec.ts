import { Test, TestingModule } from '@nestjs/testing';
import { CorporateActionsController } from './corporate-actions.controller';
import { CorporateActionsService } from './corporate-actions.service';

describe('CorporateActions Controller', () => {
  let controller: CorporateActionsController;
  let service: CorporateActionsService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorporateActionsController],
      providers: [CorporateActionsService]
    }).compile();

    controller = module.get<CorporateActionsController>(CorporateActionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
