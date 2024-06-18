import { FC, useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { debounce } from "lodash";
import { TextInput, View } from 'react-native';
import { theme  } from '../../theme/';
import SearchIcon from '../../../assets/Icons/search.svg';

const SearchContainer = styled(View)`
  border-color: ${({ theme }) => theme.text.primary};
  border-width: 1px;
  border-radius: 28px;
  padding: 10px;
  margin: 16px;
`;

const InputStyled = styled(TextInput)`
  font-size: 16px;
  flex: 1;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.text.primary};
`;

type SearchTextProps = {
  setFilterCriteria: (text: string) => void;
};

const Search: FC<SearchTextProps> = ({ setFilterCriteria }) => {
  const [value, setValue] = useState('');
  
  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      debouncedSearch(newValue);
    },
    [setFilterCriteria],
    );
 
  const debouncedSearch = debounce((newValue) => {
    setFilterCriteria(newValue);
  }, 500);
    
  return (
    <SearchContainer>
      <View style={{flexDirection: 'row'}}>
        <SearchIcon height={18} width={18} style={{marginRight: 8}}/>
        <InputStyled
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Buscar Criptomonedas"
          placeholderTextColor={theme.text.tertiary}
          value={value}
          onChangeText={handleChange}
        />
      </View>
    </SearchContainer>
  );
};

export { Search };
