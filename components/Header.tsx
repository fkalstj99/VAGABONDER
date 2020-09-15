import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import HeaderStyles from '../styles/Header.module.css';

function Header() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSrc, updateSrc] = useState<string>('/static/loading.gif');

  useEffect(() => {
    //start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = ImageSrc;
    imageToLoad.onload = () => {
      //When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(ImageSrc);
    };
  }, [ImageSrc]);

  return (
    <header
      className={HeaderStyles.banner}
      style={{
        backgroundImage: `url(${currentSrc})`,
        backgroundSize: !loading && 'cover',
        height: '100vh',
        backgroundPosition: 'center center',
        opacity: loading ? '0.5' : '1',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity .15s linear',
      }}
    >
      {!loading && (
        <>
          <div className={HeaderStyles.banner__title__container}>
            <h1
              className={classNames({
                [HeaderStyles.banner__title]: true,
                [HeaderStyles.title__animation__one]: true,
              })}
            >
              VAGA
            </h1>
            <h1
              className={classNames({
                [HeaderStyles.banner__title]: true,
                [HeaderStyles.title__animation__two]: true,
              })}
            >
              ONDER
            </h1>
          </div>
          <Link href="/search">
            <h1
              className={classNames({
                [HeaderStyles.banner__link]: true,
                [HeaderStyles.btn]: true,
              })}
            >
              EXPLORE MORE
            </h1>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;

const ImageSrc =
  'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
