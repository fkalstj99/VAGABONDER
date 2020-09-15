import React, { useState, useEffect, useRef } from 'react';
import searchStyles from '../../styles/Search/Search.module.css';

function SearchHeader({ search, category }) {
  const [show, handleShow] = useState<boolean>(false);
  const SearchListRef = useRef<HTMLUListElement>();
  const [searchInput, setSearchInput] = useState<string>('Seoul');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? handleShow(true) : handleShow(false);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  if (SearchListRef.current?.childNodes !== undefined) {
    SearchListRef.current.childNodes.forEach((el: any) => {
      el.addEventListener('click', () => {
        SearchListRef.current
          .querySelector('.active')
          .classList.remove('active');

        el.classList.add('active');
        category(el.id);
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (searchInput !== '') {
      search(searchInput);
      if (SearchListRef.current.querySelector('.active').id !== 'results') {
        SearchListRef.current
          .querySelector('.active')
          .classList.remove('active');
        SearchListRef.current.firstElementChild.classList.add('active');
        category(SearchListRef.current.firstElementChild);
      }
    }
    setSearchInput('');
  }

  return (
    <header className={show && searchStyles.search__white__container}>
      <section className={searchStyles.search}>
        <div className={searchStyles.search__container}>
          <form onSubmit={handleSubmit}>
            <i style={iconStyles} className="fa fa-search"></i>
            <input
              className={searchStyles.search__input}
              placeholder="Search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul ref={SearchListRef} className={searchStyles.search__list}>
          <li id="results" className="active">
            Results
          </li>
          <li id="attractions">Attractions</li>
        </ul>
      </section>
    </header>
  );
}

export default SearchHeader;
const iconStyles: object = {
  position: 'absolute',
  marginLeft: '10px',
  marginTop: '13px',
};
