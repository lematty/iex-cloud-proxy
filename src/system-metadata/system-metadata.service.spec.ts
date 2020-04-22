import { Test, TestingModule } from '@nestjs/testing';
import { SystemMetadataService } from './system-metadata.service';

describe('SystemMetadataService', () => {
  let service: SystemMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemMetadataService],
    }).compile();

    service = module.get<SystemMetadataService>(SystemMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
