import styled from 'styled-components'

export const ContainerCart = styled.div`
    max-width: 980px;
    margin: 10px auto;
    color: ${(props) => props.theme.textSecondary};
    @media (max-width: 999px) {
    padding: 0 10px;
    }
`

export const ContainerTotalPrice = styled.div`
    margin: 30px 0;
    text-align: right;
    font-weight: bold;
    font-size: 18px;

`

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
`