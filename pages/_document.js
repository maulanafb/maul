import { SmoothScrollProvider } from "@/src/context/SmoothScroll.context";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-id">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Maulana Fatih Bilqisthi" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="location" content="Pontianak, Indonesia" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "Maulana Fatih Bilqisthi - Fullstack Web Developer",
            "url": "https://yourwebsite.com",
            "description": "Fullstack Web Developer based in Pontianak, Indonesia, offering web development, software development, SEO optimization, and consulting services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pontianak",
              "addressRegion": "Indonesia"
            }
          }`}
        </script>
        <meta name="keywords" content="fullstack web developer, pontianak, indonesia, web development, software development, front-end development, back-end development, javascript, reactjs, nodejs, mysql, mongodb, seo" />
        <meta name="description" content="Fullstack Web Developer in Pontianak, Indonesia, specializing in web development, software development, and SEO optimization. I build fast, reliable, and beautiful websites and applications using cutting-edge technologies." />
        <title>Maulana Fatih Bilqisthi - Fullstack Web Developer | Pontianak, Indonesia</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <SmoothScrollProvider>
          <Main />
        </SmoothScrollProvider>
        <NextScript />
      </body>
    </Html>
  );
}
