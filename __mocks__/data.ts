import { Cryptocurrency } from '../src/api/types';
import { User } from '@react-native-google-signin/google-signin';

const currenciesData: Cryptocurrency[] = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    num_market_pairs: 10943,
    date_added: '2010-07-13T00:00:00.000Z',
    max_supply: 21000000,
    circulating_supply: 19664912,
    total_supply: 19664912,
    infinite_supply: false,
    last_updated: '2024-03-26T16:46:00.000Z',
    quote: {
      USD: {
        price: 69599.71303641264,
        volume_24h: 40664759292.57396,
        percent_change_1h: -1.03136701,
        percent_change_24h: -0.73631703,
        market_cap: 1368672232086.3074,
        market_cap_dominance: 52.24,
        fully_diluted_market_cap: 1461593973764.67,
        last_updated: '2024-03-26T16:46:00.000Z',
      },
    },
  },
  {
    id: 1027,
    name: 'Ethereum',
    symbol: 'ETH',
    num_market_pairs: 8652,
    date_added: '2015-08-07T00:00:00.000Z',
    max_supply: null,
    circulating_supply: 120074016.27550143,
    total_supply: 120074016.27550143,
    infinite_supply: true,
    last_updated: '2024-03-26T16:45:00.000Z',
    quote: {
      USD: {
        price: 3549.137750052892,
        volume_24h: 20406590605.586422,
        percent_change_1h: -1.23818139,
        percent_change_24h: -1.37018086,
        market_cap: 426159223963.8475,
        market_cap_dominance: 16.2231,
        fully_diluted_market_cap: 426159223963.85,
        last_updated: '2024-03-26T16:45:00.000Z',
      },
    },
  },
];

const userData: User = {
  idToken: '13456-ID',
  serverAuthCode: '1234',
  user: {
    email: 'nerio@challenge.com',
    familyName: 'Testing',
    givenName: 'Challenge',
    id: '1',
    name: 'test',
    photo: 'https://www.test.com/photo.png',
  },
};


export { currenciesData, userData };
