import styled from 'styled-components';

interface NavigationContainerProps {
  isMenuOpen: boolean;
}

export const AcessContainer = styled.div`
  background-color: ${(props) => props.theme.color};
  width: 100%;
  height: 30px;
  padding: 5px 0;
  & > div {
    max-width: 980px;
    margin: 0 auto;
  }
  p {
    color: ${(props) => props.theme.white};
    text-align: right;
    @media (max-width: 999px) {
      padding-right: 10px;
    }
    @media (max-width: 765px) {
      text-align: center;
    }
  }
  a {
    margin-left: auto;
    color: ${(props) => props.theme.white};
    &:hover {
      text-decoration: none;
    }
  }
`;

export const LogoSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 980px;
  margin: 10px auto;
  height: 90px;
  @media (max-width: 999px) {
    padding: 0 10px;
  }
  img {
    width: 168px;
    height: 57px;
    cursor: pointer;
  }

  .menuIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const NavigationContainer = styled.div<NavigationContainerProps>`
  background-color: ${(props) => props.theme.primary};
  width: 100%;

  nav {
    max-width: 980px;
    margin: 0 auto;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 700px;
      height: 60px;
      list-style: none;
      @media (max-width: 999px) {
        margin: 0 auto;
      }
      li {
        color: ${(props) => props.theme.white};
        text-transform: uppercase;
        font-weight: 800;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
        a {
          text-decoration: none;
          color: ${(props) => props.theme.white};
        }
      }
    }
  }
  @media (max-width: 765px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'inherit' : 'none')};
    background-color: ${(props) => props.theme.primary};
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    z-index: 9;
    nav {
      padding-top: 50px;
      height: 100vh;
      ul {
        flex-direction: column;
        li {
          padding-top: 40px;
        }
      }
    }
  }

  .menuIconClose {
    width: 40px;
    height: 40px;
    position: absolute;
    right: -40px;
    top: 30px;
    cursor: pointer;
  }
`;
