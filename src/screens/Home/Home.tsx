import React, { FC, useMemo, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FlatList, Pressable, RefreshControl } from 'react-native';
import {  
  CardContainer,
  Container,
  Icon,
  IconContainer,
  Layout,
  NumbersContainer,
  PercentText,
  PressableIconLike,
  TextContainer,
  TextFav,
  TitleName,
  TitlePrice,
  TitleSymbol,
  Toggle,
  ToggleContainer,
  ButtonContainer,
  ButtonText,
  ToggleButtonContainer,
} from './styles';
import { useQuery } from 'react-query';
import { useApi } from '../../api/';
import { useFavorites } from '../../hooks/useFavorites';
import { useUser } from '../../hooks/useUser';
import { Cryptocurrency } from '../../api/types';
import { HomeScreenNavigationProp } from '../../navigation/types';
import LikeIcon from '../../../assets/Icons/like.svg';
import UnLikeIcon from '../../../assets/Icons/unlike.svg';
import { Search } from '../../components/search/Search';
import { theme  } from '../../theme/';

const URI_ICON = 'https://s2.coinmarketcap.com/static/img/coins/64x64/';

type ItemProps =  {
  item: Cryptocurrency;
};

type RenderItemProps = {
  item : Cryptocurrency
};

const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const [filterCriteria, setFilterCriteria] = useState<string>('');
  const [seeFavorites, setSeeFavotes] = useState(false);
  const { addFavorite, isFavorite, removeFavorite, favorites } = useFavorites();
  const { getCurrencies } = useApi();
  const { clearUser } = useUser();
  const { data, refetch, isFetching } = useQuery('currencies', getCurrencies, {
    refetchInterval: 30000,
  });


  const matchesFilterCriteria = (item: any, criteria: string) => {
    const lowerCaseCriteria = criteria.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerCaseCriteria) ||
      item.symbol.toLowerCase().includes(lowerCaseCriteria)
    );
  };

  const filteredData = useMemo(
    () =>
      data?.filter(
        item =>
          matchesFilterCriteria(item, filterCriteria),
      ),
    [data, filterCriteria],
  );

  const matchesFavorites = filteredData?.filter(item => favorites.includes(item.symbol));
  
  const formatPrice = (price: number) => {
    return price?.toFixed(2);
  };

  const onRefresh = () => {
    refetch();
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <Item
      key={item.id}
      item={item}
    />
  );

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      clearUser();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  const Item: FC<ItemProps> = ({
   item
  }) => {    
    const isLiked = useMemo(() => isFavorite(item.symbol), [isFavorite, item.symbol]);    
    const addFavorites = (() => {
      isLiked ? removeFavorite(item.symbol) : addFavorite(item.symbol);
    })
    
    return (
      <Pressable onPress={() => { navigation.navigate('Detail', { item })}}>
      <CardContainer>
        <IconContainer>
          <Icon source={{ uri: `${URI_ICON}${item.id}.png` }} />
          <TextContainer>
            <TitleName>{item.name}</TitleName>
            <TitleSymbol>{item.symbol}</TitleSymbol>
          </TextContainer>
        </IconContainer>
       <NumbersContainer>
           <TitlePrice>{formatPrice(item.quote?.USD.price)}</TitlePrice>
          <PercentText negative={item.quote?.USD.percent_change_24h < 0}>
            {item.quote?.USD.percent_change_24h}%
          </PercentText>  
       </NumbersContainer>
       <PressableIconLike onPress={addFavorites}>
          {
            isLiked ? <LikeIcon width={12} height={12}/> : <UnLikeIcon width={16} height={16}/>
          }
        </PressableIconLike> 
      </CardContainer>
      </Pressable>

    );
  };

  return (
    <Layout>
      <Container>
        <Search setFilterCriteria={setFilterCriteria}/>
        <ToggleButtonContainer>
          <ToggleContainer>
            <Toggle
              trackColor={{ false: theme.button.tertiary, true: theme.button.primary }}
              ios_backgroundColor={theme.background.inversed}
              onValueChange={() =>  setSeeFavotes(previousState => !previousState)}
              value={seeFavorites}
              />
            <TextFav>Favoritos</TextFav>
          </ToggleContainer>
        <ButtonContainer onPress={signOut}>
          <ButtonText>Cerrar Sesion</ButtonText>
        </ButtonContainer>
        </ToggleButtonContainer>
          <FlatList
            data={seeFavorites ? matchesFavorites : filteredData}
            renderItem={renderItem}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
            }
          />
      </Container>
    </Layout>
  );
};


export { Home };