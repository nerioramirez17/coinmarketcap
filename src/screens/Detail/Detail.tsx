import { useMemo } from 'react';
import { useApi } from '../../api/';
import { useQuery } from 'react-query';
import { DetailProps } from 'navigation/types';
import {
  Container,
  ContainerInfo,
  Icon,
  IconContainer,
  IconContainerText,
  Layout,
  PercentText,
  PressableIconLike,
  TextInfo,
  TextValue,
  TitleName,
  TitlePrice,
} from './styles';
import Header from '../../components/header/Header';
import LikeIcon from '../../../assets/Icons/like.svg';
import UnLikeIcon from '../../../assets/Icons/unlike.svg';
import { useFavorites } from '../../hooks/useFavorites';
import { RefreshControl, ScrollView } from 'react-native';

const URI_ICON = 'https://s2.coinmarketcap.com/static/img/coins/64x64/';

const Detail: React.FC<DetailProps> = ({ route }) => {
  const currency = route.params.item;
  const { USD } = currency.quote;
  const { addFavorite, isFavorite, removeFavorite } = useFavorites();
  const isLiked = useMemo(
    () => isFavorite(currency.symbol),
    [isFavorite, currency.symbol],
  );
  const { getCurrencyById } = useApi();
  const { data, isFetching, refetch } = useQuery(
    ['currency', currency.id],
    () => getCurrencyById(currency.id),
    {
      refetchInterval: 30000,
    },
  );

  const formatPrice = (price: number) => {
    return price?.toFixed(2);
  };

  const addFavorites = (() => {
    isLiked ? removeFavorite(currency.symbol) : addFavorite(currency.symbol);
  })

  const updatedData = useMemo(() => {
    if (data) {
      return data[currency.id];
    }
    return currency;
  }, [currency, data]);

  const onRefresh = () => {
    refetch();
  };

  return (
    <Layout>
      <Header title={`${currency.name} (${currency.symbol})`} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }>
        <PressableIconLike onPress={addFavorites}>
          {isLiked ? (
            <LikeIcon
              width={20}
              height={20}
            />

          ) : (
            <UnLikeIcon
              width={26}
              height={26}
            />
          )}
        </PressableIconLike>
        <IconContainer>
          <Icon source={{ uri: `${URI_ICON}${currency.id}.png` }} />
        </IconContainer>
        <Container>
          <IconContainerText>
            <TitleName>{currency.name}</TitleName>
            <TitlePrice>${formatPrice(updatedData.quote.USD.price)}</TitlePrice>
            <PercentText negative={USD.percent_change_24h < 0}>
              ({formatPrice(USD.percent_change_24h)}%)
            </PercentText>
          </IconContainerText>
          <ContainerInfo>
            <TextInfo>
              Market cap:{' '}
              <TextValue>{updatedData.quote.USD.market_cap}</TextValue>
            </TextInfo>
            <TextInfo>
              Volume 24h:{' '}
              <TextValue>{updatedData.quote.USD.volume_24h}</TextValue>
            </TextInfo>
            <TextInfo>
              Total Supply:{' '}
              <TextValue>{updatedData.circulating_supply}</TextValue>
            </TextInfo>
            {updatedData.max_supply && (
              <TextInfo>
                Max Supply: <TextValue>{updatedData.max_supply}</TextValue>
              </TextInfo>
            )}
          </ContainerInfo>
        </Container>
      </ScrollView>
    </Layout>
  );
};

export { Detail };
