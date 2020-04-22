import { Test, TestingModule } from '@nestjs/testing';
import { CorporateActionsService } from './corporate-actions.service';

describe('CorporateActionsService', () => {
  let service: CorporateActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorporateActionsService],
    }).compile();

    service = module.get<CorporateActionsService>(CorporateActionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
