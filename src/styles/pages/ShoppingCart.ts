import styled from 'styled-components';

export const ContainerCart = styled.div`
  max-width: 980px;
  margin: 10px auto;
  color: ${(props) => props.theme.textSecondary};
  @media (max-width: 999px) {
    padding: 0 10px;
  }

  table {
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

export const ContainerTotalPrice = styled.div`
  margin: 30px 0;
  text-align: right;
  font-weight: bold;
  font-size: 18px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
  button {
    margin-left: 15px;
    background-color: ${(props) => props.theme.acquablue};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 8px;

    &:first-child {
      background-color: gray;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
