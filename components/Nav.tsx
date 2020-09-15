import { useState, useEffect } from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
  const [show, handleShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let width: number = document.documentElement.scrollWidth;
      if (width <= 700) {
        handleShow(true);
      } else {
        window.scrollY > 0 ? handleShow(true) : handleShow(false);
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  });

  return (
    <nav className={show.toString() && navStyles.nav__white__container}>
      {show && (
        <>
          <Link href="/">
            <img
              src="https://www.iconfinder.com/data/icons/squared-line-travel-and-transport/64/plane-circle-512.png"
              alt="The icon of Airlane"
            />
          </Link>
          <input type="checkbox" id="click" style={{ display: 'none' }} />
          <label htmlFor="click">
            <i className="fa fa-bars fa-2x" style={{ float: 'right' }}></i>
          </label>
          <ul className={navStyles.nav__list}>
            <li>
              <Link href="search">SEARCH</Link>
            </li>
            <li>
              <Link href="info">info</Link>
            </li>

            <div className={navStyles.nav__list__link__dropdown}>
              <li className={navStyles.nav__list__link}>#Link</li>
              <div className={navStyles.nav__list__link__dropdown__content}>
                <a
                  href="https://github.com/fkalstj99/VAGABONDER"
                  target="_blank"
                >
                  <p>github</p>
                </a>
              </div>
            </div>
          </ul>
        </>
      )}
    </nav>
  );
}
