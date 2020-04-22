import { Injectable } from '@nestjs/common';
import { dataPoints, DataPoint, TimeSeries, timeSeries, TimeSeriesById, timeSeriesById } from 'iex-cloud';

@Injectable()
export class GuidesService {

  // https://iexcloud.io/docs/api/#data-points
  async getDataPoints(symbol: string, key?: string): Promise<readonly DataPoint[]> {
    return await dataPoints(symbol, key);
  }

  // https://iexcloud.io/docs/api/#time-series
  async getTimeSeries(): Promise<readonly TimeSeries[]> {
    return await timeSeries();
  }

  // https://iexcloud.io/docs/api/#time-series
  async getTimeSeriesById(id: string, key: string, subkey?: string): Promise<TimeSeriesById> {
    return await timeSeriesById(id, key, subkey);
  }
}
