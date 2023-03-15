import Head from "next/head";
import Image from "next/image";
import whiteLogo from "/public/static/img/logo-white.png";
import nature1 from "/public/static/img/nat-1-large.jpg";
import nature2 from "/public/static/img/nat-2-large.jpg";
import nature3 from "/public/static/img/nat-3-large.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Natours | Exciting tours for adventurous people</title>
      </Head>

      <header className="header">
        <div className="header__logo-box">
          <Image
            className="header__logo"
            src={whiteLogo}
            alt="Logo"
            width={35}
            height={35}
          />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You&apos;re going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>

              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <Image
                  className="composition__photo composition__photo--p1"
                  src={nature1}
                  alt="image 1"
                />
                <Image
                  className="composition__photo composition__photo--p2"
                  src={nature2}
                  alt="image 2"
                />
                <Image
                  className="composition__photo composition__photo--p3"
                  src={nature3}
                  alt="image 3"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
