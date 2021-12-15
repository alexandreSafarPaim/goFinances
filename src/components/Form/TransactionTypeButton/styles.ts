import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import {  } from 'react-native-gesture-handler';

interface IIconsProps {
  type: "up" | "down";
}
interface IButtonsProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.View<IButtonsProps>`
  width: 48%;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ isActive, type, theme }) =>
    isActive &&
    css`
      background-color: ${type == "up"
        ? theme.colors.success_light
        : theme.colors.attention_light};
      border-color: transparent;
    `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Feather)<IIconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type == "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
