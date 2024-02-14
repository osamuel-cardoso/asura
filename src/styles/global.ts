import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-Black.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-Black.woff')format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-Regular.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-Regular.woff')format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-ExtraBold.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-ExtraBold.woff')format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-DemiBold.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-DemiBold.woff')format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-Light.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-Light.woff')format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-Bold.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-Bold.woff')format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'BDOGrotesk';
        src: url('src/fonts/BDOGrotesk-Medium.woff2')format('woff2'),
            url('src/fonts/BDOGrotesk-Medium.woff')format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    ::-webkit-scrollbar{
        width: 0.5rem;

        &-thumb{
            background-color: ${(props) =>
                props.theme.colors.neutrals.themeNeutral_300};
            border-radius: 6249999.9375rem;
            

            &:hover{
                cursor: grabbing;
                background-color: ${(props) =>
                    props.theme.colors.neutrals.themeNeutral_400};
            }
        }
    }
    
    
    html{
        font-size: 1rem;
        font-family: ${(props) => props.theme.font.fontFamily};
        
        @media (min-width: 991px) and (max-width: 1440px){
            font-size: 0.875rem;
        }

    }

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: ${(props) => props.theme.font.fontFamily};
        -webkit-font-smoothing: antialiased;
        letter-spacing: -0.015em;
        list-style: none;
    }

    body {
        font-family: ${(props) => props.theme.font.fontFamily};

        background-color: ${(props) => props.theme.colors.themeBackground};
        color: ${(props) => props.theme.colors.themeText};
    }

    a{
        color: ${(props) => props.theme.colors.themeText};
    }


`
