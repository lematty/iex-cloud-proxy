import { Controller, Get, Query, Param } from '@nestjs/common';
import { GuidesService } from './guides.service';
import { DataPoint, TimeSeries, TimeSeriesById } from 'iex-cloud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('guides')
@Controller('guides')
export class GuidesController {
  constructor(private guidesService: GuidesService) {}

  @Get('/data-points')
  async getDataPoints(
    @Query('symbol') symbol: string,
    @Query('key') key?: string
    ): Promise<readonly DataPoint[]> {
    return await this.guidesService.getDataPoints(symbol, key);
  }

  @Get('/time-series')
  async getTimeSeries(): Promise<readonly TimeSeries[]> {
    return await this.guidesService.getTimeSeries();
  }

  @Get('/time-series/:id')
  async getTimeSeriesById(
    @Param('id') id: string,
    @Query('key') key: string,
    @Query('subkey') subkey?: string
    ): Promise<TimeSeriesById> {
    return await this.guidesService.getTimeSeriesById(id, key, subkey);
  }
}
