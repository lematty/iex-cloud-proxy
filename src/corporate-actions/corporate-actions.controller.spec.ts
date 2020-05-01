import { Test, TestingModule } from '@nestjs/testing';
import { CorporateActionsController } from './corporate-actions.controller';
import { CorporateActionsService } from './corporate-actions.service';
import { bonusIssueMock, distributionMock } from './corporate-actions.mock';
import { Dividend } from 'iex-cloud';

describe('CorporateActions Controller', () => {
  let controller: CorporateActionsController;
  let service: CorporateActionsService;
  const symbol = 'IBM';
  const refid = 'refid';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorporateActionsController],
      providers: [CorporateActionsService]
    }).compile();

    controller = module.get<CorporateActionsController>(CorporateActionsController);
    service = module.get<CorporateActionsService>(CorporateActionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getBonusIssue', () => {
    it('should return an array of cats', async () => {
      jest.spyOn(service, 'getBonusIssue').mockResolvedValue(bonusIssueMock);

      expect(await controller.getBonusIssue(symbol, refid)).toBe(bonusIssueMock);
    });
  });

  describe('getDistribution', () => {
    it('should return an array of cats', async () => {
      jest.spyOn(service, 'getDistribution').mockResolvedValue(distributionMock);

      expect(await controller.getDistribution(symbol, refid)).toBe(distributionMock);
    });
  });

  describe('getDividends', () => {
    it('should return an array of cats', async () => {
      const distributionMock: readonly Dividend[] = [
        {
          symbol: 'ASML',
          exDate: '2019-11-04',
          recordDate: '2019-11-05',
          paymentDate: '2019-11-15',
          announceDate: '2019-10-16',
          currency: 'USD',
          frequency: 'semi-annual',
          amount: '1.1697',
          description: 'New York Shares',
          flag: 'Cash',
          securityType: 'Depository Receipts',
          notes: '(As on 04/11/2019) USDRJPM<BR>Security Name: ASML HOLDING NV (ASML US) - ADR - Final Announcement<BR>CUSIP: N07059210<BR>DR Record Date:November 05, 2019<BR>DR Payment/Value Date:November 15, 2019<BR>Foreign Payment Date:November 15, 2019<BR>Euro per foreign share 1.05<BR>DR Ratio 1 : 1<BR>Euro per DR 1.05<BR>Foreign Exchange Date<BR>Final Foreign Exchange Rate: 1.114<BR>Inclusive of a fee of 0.0000000<BR>All amounts are in USD<BR>Withholding Tax Rate 15%<BR>Rate per DR 1.1697000<BR>Withholding Amount 0.1754550<BR>Dividend Fee 0.0000000<BR>DSC 0.0000000<BR>Final Dividend Rate per DR 0.9942450<BR><BR>(As on 04/11/2019)USDIVINVEST <BR>Symbol ASML<BR>New.Amount 0.9942<BR>Exchange NASDAQ<BR>Div.DecDate 00-00-0000<BR>Div.ExDate 11/04/2019<BR>Div.RecDate 11/05/2019<BR>Div.PayDate 11-15-2019<BR><BR>(As on 01/11/2019)DEDIVS<BR>Ex date :04/11/2019<BR><BR>(As on 16/10/2019 ) USDRJPM_APPX<BR>Security Name: ASML HOLDING NV (ASML US) - ADR - Initial Announcement<BR>CUSIP: N07059210<BR>DR Record Date:November 05, 2019<BR>DR Payment/Value Date: November 15, 2019<BR>Foreign Exchange Date: 10/15/2019<BR>F X Conversion Rate :1.1034<BR>All amounts are in USD:<BR>Withholding Tax Rate 15%<BR>Rate per DR 1.1585700<BR>Withholding Amount 0.1737855<BR>Dividend Fee 0.0000000<BR>DSC 0.0000000<BR>Approximate Dividend Rate per DR 0.9847845<BR><BR>(As on 16/10/2019)USDIVINVEST<BR>Symbol ASML<BR>New.Amount 0.9848<BR>Exchange NASDAQ<BR>Div.DecDate 00-00-0000<BR>Div.ExDate 11/04/2019<BR>Div.RecDate 11/05/2019<BR>Div.PayDate 11-15-2019<BR>',
          figi: 'BBG000K6MRN4',
          lastUpdated: '2019-11-05',
          countryCode: 'US',
          parValue: '',
          parValueCurrency: 'USD',
          netAmount: '0.994245',
          grossAmount: '1.1697',
          marker: 'Interim',
          taxRate: '15',
          fromFactor: '',
          toFactor: '',
          adrFee: '',
          coupon: '',
          declaredCurrencyCD: '',
          declaredGrossAmount: '',
          isNetInvestmentIncome: 1,
          isDAP: 1,
          isApproximate: 1,
          fxDate: '2019-11-15',
          secondPaymentDate: null,
          secondExDate: null,
          fiscalYearEndDate: '2019-12-31',
          periodEndDate: '2019-06-30',
          optionalElectionDate: null,
          toDate: null,
          registrationDate: null,
          installmentPayDate: null,
          declaredDate: '2019-10-16',
          refid: '1691530',
          created: '2019-10-17',
          id: 'ADVANCED_DIVIDENDS',
          source: 'IEX Cloud',
          key: 'US',
          subkey: 'ASML',
          date: 1572825600000,
          updated: 1573134765000
        },
      ];
        
      jest.spyOn(service, 'getDividends').mockResolvedValue(dividendsMock);

      expect(await controller.getDividends(symbol, refid)).toBe(distributionMock);
    });
  });
});
