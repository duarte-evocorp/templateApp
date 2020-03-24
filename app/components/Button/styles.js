import styled from 'styled-components/native';
import { theme } from '../../styles';
import { Normalize } from '../../helpers';

export const Container = styled.TouchableOpacity`
  background: ${props => props.danger ? theme.colors.danger : theme.colors.primary};
  height: ${Normalize.verticalScale(60)}px;
  align-self: stretch;
  border-radius: 5px;
  border-bottom-color: ${props => props.danger ? theme.colors.dangerDark : theme.colors.primaryDark};
  border-bottom-width: 5px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.white}
  ${theme.fonts.h2}
`;
