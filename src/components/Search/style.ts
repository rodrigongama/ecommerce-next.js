import styled from 'styled-components';

interface LabelSearchProps {
  isInputSearch: boolean;
}

export const SearchContainer = styled.div`
  position: relative;

  div {
    height: 40px;
    @media (max-width: 765px) {
      display: none;
    }
    input {
      height: 100%;
      width: 350px;
      padding: 10px;
    }
    button {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      text-transform: uppercase;
      font-weight: 800;
      height: 100%;
      padding: 0 20px;
      border: none;
      transition: 0.2s;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .inputMobile {
    display: flex;
    position: absolute;
    right: 10px;
    top: 0;
    width: 300px;
    input {
      width: 250px;
    }
  }
`;

export const Label = styled.label<LabelSearchProps>`
  .searchIcon {
    transform: rotateY(180deg);
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
    display: ${({ isInputSearch }) => isInputSearch && 'none'};
  }
`;
