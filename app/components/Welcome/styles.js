import styled from 'styled-components/native';
import { theme } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.white};
  ${theme.fonts.title}
`;

export const TemplateType = styled.Text`
  color: ${theme.colors.white};
  ${theme.fonts.h1}
`;