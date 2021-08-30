import styled from 'styled-components';

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
