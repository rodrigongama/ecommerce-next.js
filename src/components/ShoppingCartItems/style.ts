import styled from 'styled-components';

export const TableContainer = styled.table`
  margin-top: 50px;
  min-width: 650px;

  th {
    text-align: center;
  }

  td {
    text-align: center;
    height: 200px;

    &:first-child {
      text-align: left;
    }
    &:last-child {
      svg {
        cursor: pointer;
        margin-left: 20px;
      }
    }
  }
`;

export const ButtonsQuantity = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.theme.acquablue};
    width: 22px;
    height: 22px;
    cursor: pointer;

    &:first-child {
      color: gray;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;

    &:disabled {
      cursor: none;
    }
  }

  p {
    margin: 0 5px;
  }
`;
