import styled from 'styled-components/native';
import { theme } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const DollarContainer = styled.View`
  flex: 6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  
`;

export const Value = styled.Text`
  color: ${props => props.pctChange < 0 ? theme.colors.danger : theme.colors.sucess};
  flex: 3;
  text-align: right;
  ${theme.fonts.caption}
`;