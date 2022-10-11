import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        box-sizing:boerder-box;
        font-family: 'Noto Sans', 'Noto Sans KR', sans-serif !important;
    }
`;

export default GlobalStyle;
