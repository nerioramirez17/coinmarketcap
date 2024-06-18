import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Layout = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const Container = styled(View)`
  padding: 30px;
`;

export const IconContainerText = styled(View)`
  align-items: center;
  margin-bottom: 10px;
`;

export const IconContainer = styled(View)`
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  align-items: center;
`;

export const TitleName = styled(Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  margin-top: 10px;
`;

export const TitlePrice = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
`;

export const PercentText = styled(Text)<{ negative: boolean }>`
  font-size: 16px;
  color: ${({ negative, theme }) =>
    negative ? theme.text.negative : theme.text.positive};
  font-weight: 500;
`;

export const ContainerInfo = styled(View)`
  margin-top: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 8px;
`;

export const TextInfo = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
`;

export const TextValue = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 400;
`;

export const PressableIconLike = styled(TouchableOpacity)`
  margin-top: 10px;
  margin-left: 40px;
`;
