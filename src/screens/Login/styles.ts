
import { Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Layout = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const TitleText = styled(Text)`
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text.primary};
`;

export const Subtitle = styled(Text)`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
`;

export const ButtonContainer = styled(TouchableOpacity)`
  margin: 30px;
  flex-direction: row;
  align-items: center;
  border-radius: 18px;
  width: 180px;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.background.primary};
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  margin-left: 6px; 
  color: ${({ theme }) => theme.text.primary};
`;