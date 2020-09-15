import React from 'react';
import InfoStyles from '../styles/Info.module.css';
import mainStyles from '../styles/Main.module.css';
import Nav from '../components/Nav';
import Map from '../components/Map';
import Head from 'next/head';

function info() {
  return (
    <>
      <Head>
        <title>Vagabonder - We made best</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <div className={InfoStyles.fluid__container}>
        <div className={InfoStyles.fluid__small__container}>
          <h2 className={InfoStyles.title}>About VagaBonder</h2>
          <hr className={InfoStyles.title__line} />

          <h3>WHAT WE ARE</h3>
          <p>
            Nam placerat, purus nec facilisis vehicula, orci ligula interdum
            augue, vel feugiat odio lorem tincidunt arcu. Duis euismod pretium
            mauris sit amet tincidunt. Phasellus tempor sem sit amet felis
            interdum dictum. In eu pulvinar mi, nec malesuada nunc. Etiam
            faucibus ex vel arcu sollicitudin elementum. Aliquam sit amet
            efficitur ante. Cras id lobortis odio.
          </p>

          <h3>HOW WE DO IT</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet dignissim massa. Sed congue interdum velit eu ultrices. Mauris
            urna nibh, aliquam ut nisl bibendum, lobortis hendrerit nunc. Sed
            ultrices iaculis est. Cras pretium tincidunt mauris, eu maximus nisl
            egestas ac. Maecenas semper feugiat tincidunt. Vestibulum vitae
            augue non libero molestie dictum id et mauris. Proin cursus
            venenatis blandit. Aenean maximus vel mauris quis ornare. Praesent
            suscipit, magna nec dignissim varius, nunc neque scelerisque orci, a
            imperdiet metus eros at lacus. Curabitur lacinia nisl aliquet leo
            eleifend, eget fringilla orci accumsan. Aliquam elementum est odio,
            in eleifend nulla tristique in. Vestibulum efficitur ante lacinia
            lacus pretium, porta mattis mi bibendum. Aenean fringilla tincidunt
            sem, non cursus risus malesuada nec.
          </p>

          <h3>WHO WE ARE</h3>
          <p>
            Donec in quam eu libero vulputate ullamcorper. Duis mattis nulla
            blandit purus suscipit, ac dignissim magna faucibus. Phasellus vitae
            massa eu odio placerat scelerisque a nec ipsum. Fusce commodo tempus
            luctus. Nunc diam lacus, auctor sit amet ornare ut, egestas volutpat
            dolor. Fusce facilisis odio eget semper viverra. Sed ultricies
            tincidunt tempor. In vitae elit nec lectus pharetra gravida ac nec
            enim.
          </p>

          <p>
            Sed iaculis erat id mollis condimentum. Maecenas placerat arcu a
            libero cursus, non ultrices sem cursus. Suspendisse tempor malesuada
            lectus, non molestie dolor. Nam pellentesque purus eget lacus
            aliquet sagittis. Phasellus at mattis arcu, eleifend porttitor erat.
            Curabitur id sagittis sapien. Donec placerat volutpat mauris et
            porttitor. Proin vestibulum libero et quam vulputate, vel egestas
            est
          </p>
          <hr style={{ margin: '175px 0 75px 0 ' }} />
        </div>
      </div>

      <div className={mainStyles.buffer__content__table}>
        <h2>WHERE WE'RE GOING NEXT</h2>
        <div
          style={{
            height: '150px',
          }}
        />
      </div>
      <Map />
      <div className={mainStyles.buffer__content__table}>
        <div
          style={{
            height: '220px',
          }}
        />
        <h2>FIND YOUR OWN JOURNEYS</h2>
      </div>
    </>
  );
}

export default info;
