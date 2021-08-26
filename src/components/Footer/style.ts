import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  max-width: 980px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primary};
  height: 120px;
  @media (max-width: 999px) {
    margin: 0 10px;
  }
`;
