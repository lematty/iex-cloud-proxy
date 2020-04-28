import { Controller, Get } from '@nestjs/common';
import { SystemMetadataService } from './system-metadata.service';
import { Status } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('system-metadata')
@Controller('system-metadata')
export class SystemMetadataController {

  constructor(private systemMetadataService: SystemMetadataService) {}

  @Get('/status')
  async getStatus(): Promise<Status> {
    return await this.systemMetadataService.getStatus();
  }
}
