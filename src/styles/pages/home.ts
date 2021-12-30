import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 980px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  @media (max-width: 999px) {
    padding: 0 10px;
  }
  @media (max-width: 765px) {
    display: block;
  }
`;

export const Aside = styled.aside`
  background-color: #e2dedb;
  padding: 15px 25px;
  width: 240px;

  @media (max-width: 765px) {
    display: none;
  }
`;

export const BackgroundContainer = styled.div`
  background-color: #acacac;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  @media (max-width: 765px) {
    height: 100px;
  }
`;
