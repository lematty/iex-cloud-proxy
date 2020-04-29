import { Test, TestingModule } from '@nestjs/testing';
import { SystemMetadataController } from './system-metadata.controller';
import { SystemMetadataService } from './system-metadata.service';

describe('SystemMetadata Controller', () => {
  let controller: SystemMetadataController;
  let service: SystemMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemMetadataController],
      providers: [SystemMetadataService],
    }).compile();

    controller = module.get<SystemMetadataController>(SystemMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
