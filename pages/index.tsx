import Head from 'next/head';
import Nav from '../components/Nav';
import Main from '../components/Main';
import React from 'react';

export default function Home() {
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
      <Main />
    </>
  );
}
