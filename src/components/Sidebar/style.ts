import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  border: ${(props) => props.theme.border};
  padding: 20px;
  min-height: 460px;
  width: 240px;
  @media (max-width: 325px) {
    width: 100%;
  }
  h2 {
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
  }
  h3 {
    color: ${(props) => props.theme.acquablue};
    text-transform: uppercase;
    margin: 25px 0 10px;
  }
  ul {
    margin-left: 20px;
    li {
      cursor: pointer;
      margin-bottom: 8px;
      &:hover {
        text-decoration: underline;
      }
      input {
        display: none;
      }
      label {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100px;
  margin-left: auto;
  button {
    background: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.theme.acquablue};
    font-weight: bold;
  }
`;
