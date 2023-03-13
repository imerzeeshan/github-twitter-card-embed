import axios from "axios";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Bg from "../components/Bg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ParentBox from "../components/parentbox/ParentBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>GTCE : GitHub Twitter Card Embed</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags Dynamically Generated by metaSEO (metaseo.itsvg.in) */}
        <meta name="title" content="GTCE : GitHub Twitter Card Embed" />
        <meta
          name="description"
          content="The Best Realtime Tweet embed with 60+ awesome themes. Get a Verified badge, Showcase your Tweet on Website, GitHub ReadMe or anywhere else, Download your tweet."
        />
        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="gtce.itsvg.in" />
        <meta property="og:title" content="GTCE : GitHub Twitter Card Embed" />
        <meta
          property="og:description"
          content="The Best Realtime Tweet embed with 60+ awesome themes. Get a Verified badge, Showcase your Tweet on Website, GitHub ReadMe or anywhere else, Download your tweet."
        />
        <meta property="og:image" content="https://gtce.itsvg.in/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="gtce.itsvg.in" />
        <meta
          property="twitter:title"
          content="GTCE : GitHub Twitter Card Embed"
        />
        <meta
          property="twitter:description"
          content="The Best Realtime Tweet embed with 60+ awesome themes. Get a Verified badge, Showcase your Tweet on Website, GitHub ReadMe or anywhere else, Download your tweet."
        />
        <meta property="twitter:image" content="https://gtce.itsvg.in/og.png" />
        {/* Google Ads */}
//         <script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7377463303850503"
//           crossOrigin="anonymous"
//         ></script>
      </Head>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V17V3PKMTH"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V17V3PKMTH', { page_path: window.location.pathname });
            `,
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <ParentBox />
        <Footer />
      </div>
      <Bg />
    </>
  );
}
