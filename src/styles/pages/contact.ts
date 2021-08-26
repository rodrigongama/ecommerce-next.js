import styled from 'styled-components';

export const ContainerContact = styled.div`
  max-width: 980px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  h2 {
    color: ${(props) => props.theme.primary};
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const ContainerAdress = styled.div`
  max-width: 400px;
  border-bottom: ${(props) => props.theme.border};
  padding-bottom: 15px;
  margin: 15px 0 30px;

  p {
    margin-bottom: 10px;
  }
  span {
    font-weight: bold;
  }
`;
