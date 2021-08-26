import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 980px;
  margin: 10px auto;
  color: ${(props) => props.theme.textSecondary};
  @media (max-width: 999px) {
    padding: 0 10px;
  }
`;

export const Navigation = styled.nav`
  max-width: 980px;
  margin: 20px 0 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  @media (max-width: 765px) {
    justify-content: center;
    padding-right: 70px;
  }
  @media (max-width: 325px) {
    justify-content: flex-start;
  }
  a {
    color: ${(props) => props.theme.color};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: ${(props) => props.theme.primary};
    text-transform: capitalize;
  }
  span {
    margin: 0 5px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerProducts = styled.div`
  flex-basis: 75%;
  padding-bottom: 50px;
  @media (max-width: 765px) {
    width: 100%;
    align-items: center;
    margin-top: 50px;
  }
  h1 {
    margin-left: 35px;
    color: ${(props) => props.theme.primary};
    font-weight: normal;
    font-size: 2rem;
    @media (max-width: 765px) {
      text-align: left;
      margin-left: 8px;
    }
  }

  .resultSearch {
    text-align: right;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .errorMessage {
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
  }
  .contentProductsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    column-gap: 10px;
    row-gap: 30px;
    justify-items: center;
    margin-left: 30px;
    @media (max-width: 765px) {
      margin-left: 0;
    }
  }
  .contentProductsList {
    display: flex;
    flex-direction: column;
    width: 280px;
    align-items: center;
    div {
      margin-bottom: 30px;
    }
  }
`;

export const ContainerView = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: ${(props) => props.theme.border};
  border-bottom: ${(props) => props.theme.border};
  padding: 3px 0;
  margin: 15px 0 20px;
  margin-left: auto;
  width: 95%;
  svg {
    width: 30px;
    height: 100%;
    cursor: pointer;
  }
  .iconViewSelected {
    color: ${(props) => props.theme.acquablue};
  }

  @media (max-width: 765px) {
    margin-left: 8px;
    border: none;
    svg {
      display: none;
    }
  }
`;

export const ContainerOrder = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: -0.3px;
    font-weight: bold;
  }
  select {
    width: 200px;
    border: ${(props) => props.theme.border};
    padding: 3px 5px;
    border-radius: 5px;
  }

  @media (max-width: 765px) {
    width: 100%;
    justify-content: flex-start;
    select {
      width: 150px;
    }
  }
`;
