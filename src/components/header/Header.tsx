import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../../assets/Icons/back.svg';

interface HeaderProps {
  title: string;
  hideBack?: boolean;
}

const Container = styled(View)`
  flex-direction: row;
	align-items: center;
	margin: 10px;
  margin-top: 40px;
`;

const TitleHeader = styled(Text)`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
`;

const Header: React.FC<HeaderProps> = ({ title, hideBack }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {!hideBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon height={26} width={26} />
        </TouchableOpacity>
      )}
      <TitleHeader>{title}</TitleHeader>
    </Container>
  );
};

export default Header;
