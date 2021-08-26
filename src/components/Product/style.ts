import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 320px;
  @media (max-width: 349px) {
    width: 140px;
  }
`;

export const ContainerImage = styled.div`
  border: ${(props) => props.theme.border};
  padding: 10px 5px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
    width: 80%;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 135px;
  margin-top: 10px;
`;

export const ProductName = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const ContainerSpecialPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  p {
    margin: 0 5px;
    &:first-child {
      font-size: 14px;
      text-decoration: line-through;
    }
    &:last-child {
      color: ${(props) => props.theme.primary};
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const ProductPrice = styled.div`
  color: ${(props) => props.theme.primary};
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ContentInfo = styled.div`
  width: 100%;
  button {
    background-color: ${(props) => props.theme.acquablue};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 5px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
