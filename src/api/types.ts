type ApiArray<T> = { data: T[] };

type Quote = {
  fully_diluted_market_cap: number;
  last_updated: string;
  market_cap: number;
  market_cap_dominance: number;
  percent_change_1h: number;
  percent_change_24h: number;
  price: number;
  volume_24h: number;
};

type Cryptocurrency = {
  date_added: string;
  id: number;
  infinite_supply: boolean;
  last_updated: string;
  max_supply: number | null;
  name: string;
  num_market_pairs: number;
  quote: {
    [key: string]: Quote;
    USD: Quote;
  };
  symbol: string;
  total_supply: number;
  circulating_supply: number;
};

export type { Cryptocurrency, ApiArray };
