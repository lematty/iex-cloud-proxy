import { Test, TestingModule } from '@nestjs/testing';
import { SystemMetadataController } from './system-metadata.controller';

describe('SystemMetadata Controller', () => {
  let controller: SystemMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemMetadataController],
    }).compile();

    controller = module.get<SystemMetadataController>(SystemMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
