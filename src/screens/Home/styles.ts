import { Image, Pressable, Switch, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const Layout = styled(View)`
  background-color: ${({ theme }) => theme.background.secondary};
  flex: 1;
`;

export const CardContainer = styled(View)`
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 8px;
  padding: 12px;
  margin: 6px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled(View)`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const TextContainer = styled(View)`
  margin-left: 12px;
`;

export const NumbersContainer = styled(View)`
  margin-left: 12px;
  margin-right: 22px;
`;

export const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const IconLike = styled(Image)`
  width: 16px;
  height: 16px;
`;

export const TitleName = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
  font-weight: bold;
`;

export const TitleSymbol = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.tertiary};
`;

export const TitlePrice = styled(Text)`
  font-size: 14px;
  text-align: right;
  color: ${({ theme }) => theme.text.tertiary};
`;

export const PercentText = styled(Text)<{ negative: boolean }>`
  font-size: 12px;
  text-align: right;
  color: ${({ negative, theme }) =>
    negative ? theme.text.negative : theme.text.positive};
  font-weight: 400;
`;

export const PressableIconLike = styled(Pressable)`
  position: absolute;
  right: 8px;
  top: 6px;
`;

export const ToggleContainer = styled(View)`
  margin-left: 22px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const ToggleButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Toggle = styled(Switch)`
  margin-bottom: 8px;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  margin: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 160px;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const ButtonText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.text.primary};
`;

export const TextFav = styled(Text)`
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;


export const Container = styled(View)`
  flex: 1;
  margin-top: 50px
`;




