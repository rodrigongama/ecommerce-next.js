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

export const ContainerColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    width: 40px;
    height: 20px;
    margin-right: 3px;
    margin-top: 5px;
    cursor: pointer;
  }
  .color1 {
    background-color: ${(props) => props.theme.primary};
  }
  .color2 {
    background-color: #f16323;
  }
  .color3 {
    background-color: #26a3a9;
  }
  .colorSelected {
    border: 2.5px solid ${(props) => props.theme.primary};
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
