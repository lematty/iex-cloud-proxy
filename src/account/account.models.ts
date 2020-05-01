export type Type = 'messages' | 'rules' | 'rule-records' | 'alerts' | 'alert-records';
export interface Usage {
  monthlyUsage: number;
  monthlyPayAsYouGo: number;
  dailyUsage: {
    [day: number]: number;
  },
  tokenUsage: {
    pk_123: number;
  },
  keyUsage: {
    IEX_STATS: number;
    EARNINGS: number;
    STOCK_QUOTES: number;
  }
}