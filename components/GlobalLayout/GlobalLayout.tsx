/* eslint-disable @next/next/no-page-custom-font */
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { Reset } from "styled-reset";
import variables from "../../theme/variables";
import { ThemeType } from "../../types";
import baseTheme from "../../theme/baseTheme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${variables}
    html {
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - ${(props) =>
        props.theme.breakpoints.mobile}) / (var(--max-width) - ${(props) =>
  props.theme.breakpoints.mobile}))), 20px);
      min-height: 1vw;
    }
    body{
        background: var(--lightPinkBg);
        width: 100vw;
        overflow-x: hidden;
        transition: background-color var(--transition);
        height: 500vh;
        padding-top: var(--px120);
    }
    body, *{
        font-family: var(--f-primary);
    }

    button {
        background: none;
        box-shadow: none;
        border: none;
    }

    input {
      border: none;
      background: transparent;
      box-shadow: none;
      padding: 0;

        &:focus {
            outline: none;
        }
    }
`;

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Reset />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalLayout;
