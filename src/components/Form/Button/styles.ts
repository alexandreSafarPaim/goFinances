import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  align-items: center
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  padding: 18px;
`;