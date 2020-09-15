import mainStyles from '../styles/Main.module.css';
import React, { useState } from 'react';
import Article from '../components/Article';
import Header from '../components/Header';
import Map from '../components/Map';
import LazyPressLoader from '../components/LazyPressLoader';

export default function Main() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Header />
      <main className={mainStyles.main}>
        <section className={mainStyles.main__content}>
          <h2 className={mainStyles.main__content__title}>
            THE NOMAD B COMPANY
          </h2>

          <p>&nbsp;</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>&nbsp;</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>

          <hr
            style={{
              width: '35%',
              margin: '20px auto',
            }}
          />

          <p>| press |</p>
          <LazyPressLoader />
          <hr
            style={{
              margin: '40px 0',
              border: '0',
              borderTop: '2px solid #eee',
              borderBottom: '1px solid #fff',
            }}
          />

          <p
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </p>

          <p>2021 UPCOMING OUR PLAN</p>
        </section>
        <Article loading={(okay) => setLoading(okay)} />
        <div className={mainStyles.buffer__content__table}>
          <div
            style={{
              height: '300px',
            }}
          />
          <h2>WHERE WE'RE GOING NEXT</h2>
        </div>
        {!loading && <Map />}

        <div className={mainStyles.buffer__content__table}>
          <div
            style={{
              height: '220px',
            }}
          />
          <h2>FIND YOUR OWN JOURNEYS</h2>
        </div>
      </main>
    </>
  );
}
