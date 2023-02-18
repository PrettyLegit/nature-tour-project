import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Natours | Exciting tours for adventurous people</title>
      </Head>

      <header className="header">
        <div className="logo-box">
          <Image
            className="logo"
            src="/static/img/logo-white.png"
            alt="Logo"
            width={35}
            height={35}
          />
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>

          <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
        </div>
      </header>
    </>
  );
}
