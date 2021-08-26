import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    padding: 0;
    margin: 0;
    font-family: Open Sans, sans-serif;
    color: ${(props) => props.theme.text};
    width: 100vw;
    height: 100vh;
}

button,
a {
    cursor: pointer;
}
`;
