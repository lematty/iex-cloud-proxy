import { Module } from '@nestjs/common';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { CorporateActionsService } from './corporate-actions/corporate-actions.service';
import { CorporateActionsController } from './corporate-actions/corporate-actions.controller';
import { GuidesController } from './guides/guides.controller';
import { GuidesService } from './guides/guides.service';
import { MarketInfoService } from './market-info/market-info.service';
import { MarketInfoController } from './market-info/market-info.controller';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { ReferenceDataService } from './reference-data/reference-data.service';
import { ReferenceDataController } from './reference-data/reference-data.controller';
import { StockFundamentalsController } from './stock-fundamentals/stock-fundamentals.controller';
import { StockFundamentalsService } from './stock-fundamentals/stock-fundamentals.service';
import { StockPricesService } from './stock-prices/stock-prices.service';
import { StockPricesController } from './stock-prices/stock-prices.controller';
import { StockProfilesController } from './stock-profiles/stock-profiles.controller';
import { StockProfilesService } from './stock-profiles/stock-profiles.service';
import { StockResearchService } from './stock-research/stock-research.service';
import { StockResearchController } from './stock-research/stock-research.controller';
import { SystemMetadataController } from './system-metadata/system-metadata.controller';
import { SystemMetadataService } from './system-metadata/system-metadata.service';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { HttpExceptionFilter } from './interceptors/http-exception.filter';

@Module({
  imports: [],
  controllers: [
    AccountController,
    CorporateActionsController,
    GuidesController,
    MarketInfoController,
    NewsController,
    ReferenceDataController,
    StockFundamentalsController,
    StockPricesController,
    StockProfilesController,
    StockResearchController,
    SystemMetadataController
  ],
  providers: [
    AccountService,
    CorporateActionsService,
    GuidesService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    MarketInfoService,
    NewsService,
    ReferenceDataService,
    StockFundamentalsService,
    StockPricesService,
    StockProfilesService,
    StockResearchService,
    SystemMetadataService
  ],
})
export class AppModule {}
