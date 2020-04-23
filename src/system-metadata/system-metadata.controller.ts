import { Controller, Get } from '@nestjs/common';
import { SystemMetadataService } from './system-metadata.service';
import { Status } from 'iex-cloud';

@Controller('system-metadata')
export class SystemMetadataController {

  constructor(private systemMetadataService: SystemMetadataService) {}

  @Get('/status')
  async getStatus(): Promise<Status> {
    return await this.systemMetadataService.getStatus();
  }
}
