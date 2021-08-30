import styled from 'styled-components';

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
