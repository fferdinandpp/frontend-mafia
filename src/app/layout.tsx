import type { Metadata } from "next";
import "./globals.css";

import { ReactQueryProvider } from "@/provider/react-query-provider";
import { StoreProvider } from "@/provider/store-provider";
import { LoadingProvider } from "@/provider/loading-provider";

import AlertContainer from "@/components/ui/alert/AlertContainer";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import BottomBar from "@/components/nav/BottomBar";

import { utendo } from "@/utils/font";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MAFIASTORE",
  description:
    "Jual beli akun mobile legends, top up, dan joki termurah serta terpercaya sobat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const GTM_ID = "GTM-5WRTXCZL";

  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "url('/images/background/bgmain.webp')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}
        className={`${utendo.className} w-full min-h-screen antialiased overflow-x-hidden`}
      >
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ReactQueryProvider>
          <StoreProvider>
            <LoadingProvider>
              <AlertContainer />

              <Navbar />

              <main>{children}</main>

              <Footer />

              <BottomBar />
            </LoadingProvider>
          </StoreProvider>
        </ReactQueryProvider>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
          }}
        />

        <div id="modal-root"></div>
      </body>
    </html>
  );
}
