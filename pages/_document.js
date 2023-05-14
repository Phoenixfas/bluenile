import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Welcome to Blue Nile Expeditions, your ultimate guide to exploring Ethiopia's vibrant culture, rich history, and stunning landscapes." />
          <meta name="keywords" content="Ethiopia, travelling, tour, hike, tourism, bluenile, bluenileexpedition" />
          <meta name="author" content="Blue Nile Expedition" />
          <link rel="canonical" href="https://www.bluenileexpedition.com/" />
          {/* <!-- Add Open Graph tags for social media sharing --> */}
          <meta property="og:title" content="Blue Nile Expedition" />
          <meta property="og:description" content="Welcome to Blue Nile Expeditions, your ultimate guide to exploring Ethiopia's vibrant culture, rich history, and stunning landscapes." />
          <meta property="og:image" content="https://res.cloudinary.com/drp73bqti/image/upload/v1684088229/samples/abay_jgtqqk.jpg" />
          <meta property="og:url" content="https://www.bluenileexpedition.com/" />
          <meta property="og:type" content="website" />
          {/* <!-- Add Twitter Card tags for social media sharing --> */}
          <meta name="twitter:title" content="Blue Nile Expedition" />
          <meta name="twitter:description" content="Welcome to Blue Nile Expeditions, your ultimate guide to exploring Ethiopia's vibrant culture, rich history, and stunning landscapes." />
          <meta name="twitter:image" content="https://res.cloudinary.com/drp73bqti/image/upload/v1684088229/samples/abay_jgtqqk.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <!-- Add Favicon --> */}
          <link rel="icon" type="image/png" sizes="32x32" href="/logo_cropped.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
