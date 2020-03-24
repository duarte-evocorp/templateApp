import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';

export const Container = styled.View`
    margin-top: 100px;
    margin-bottom: 20px;
    flex: 4;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

export const Form = styled(Unform)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;