import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
  href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Bebas+Neue&display=swap"
  rel="stylesheet"
/>

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
