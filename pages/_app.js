import { createGlobalStyle, ThemeProvider } from "styled-components";
import useResize from "utils/hooks/useResize";

import { useEffect } from "react";

//pre-import css
import Head from "next/head";

//gtag
import Script from "next/script";
import { useRouter } from "next/router";
import { pageView } from "lib/ga";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    font-family: Helvetica;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
    padding: 0;
  }

  //newsreader
  @font-face{
    font-family: 'Newsreader';
    src: url('/assets/fonts/Newsreader-VariableFont_wght.ttf') format('truetype');
  }

  @font-face{
    font-family: 'Newsreader';
    src: url('/assets/fonts/Newsreader-Italic-VariableFont_wght.ttf') format('truetype');
    font-style: italic;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-Italic.ttf') format('truetype');
    font-style: italic;
  }

  @font-face{
    font-family: "Poppins"; 
    src: url('/assets/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-Black.ttf') format('truetype');
    font-weight: 900;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;

  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-ExtraBold.ttf') format('truetype');
    font-weight: 800;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;

  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-ExtraLight.ttf') format('truetype');
    font-weight: 200;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;

  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-Thin.ttf') format('truetype');
    font-weight: 100;
  }

  @font-face{
    font-family: "Poppins";
    src: url('/assets/fonts/Poppins/Poppins-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
  }





  input {
    border-radius: 0;
    -webkit-appearance: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

//hide scrollbar
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  

  .yt-lite {
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: context-menu;
  }
  
  .yt-lite {
    transition: all 1s linear;
  }
  
  .lty-playbtn {
    background: pink;
  }


  /* Mapbox: Current Position Pin */
.mapboxgl-ctrl-top-right {
}

.mapboxgl-ctrl {
  opacity: 0 !important;
}

.mapboxgl-ctrl-geolocate {
  opacity: 0 !important;
  width: 100px !important;
  background: rgba(255, 255, 255, 0.7) !important;
}

.mapboxgl-ctrl-icon {
  opacity: 0 !important;
}

  
  
`;

function MyApp({ Component, pageProps }) {
  const [windowWidth, windowHeight] = useResize();
  const router = useRouter();
  useEffect(() => {
    //pageView
    const handleRouteChange = (url) => pageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <title>OSC || Organic Social Capital</title>
        <meta name="title" content={"OSC"} />

        <meta name="description" content="OSC || Organic Social Capital" />
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-2D4T5PS78F" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2D4T5PS78F');
        `}
      </Script> */}

      <GlobalStyle />
      <ThemeProvider theme={{ windowWidth, windowHeight }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
