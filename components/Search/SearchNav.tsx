import React from 'react';
import Link from 'next/link';
import SearchNavStyles from '../../styles/Search/SearchNav.module.css';

function SearchNav() {
  return (
    <nav className={SearchNavStyles.SearchNav}>
      <Link href="/">
        <div className={SearchNavStyles.SearchNav__titles__container}>
          <div className={SearchNavStyles.SearchNav__titles}>
            <img
              src="https://www.iconfinder.com/data/icons/squared-line-travel-and-transport/64/plane-circle-512.png"
              alt="The icon of Airlane"
            />

            <h1>VagaBonder</h1>
          </div>
        </div>
      </Link>
    </nav>
  );
}

export default SearchNav;
