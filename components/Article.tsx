import React from 'react';
import classNames from 'classnames';
import mainStyles from '../styles/Main.module.css';
import { useEffect, useRef } from 'react';

function Article({ loading }) {
  const articleRef = useRef<HTMLTableSectionElement>();

  useEffect(() => {
    function checkIntersect(entries, io) {
      const imageSelector = document.querySelectorAll('.travelArticle');
      if (entries[0].isIntersecting) {
        imageSelector.forEach((el: HTMLElement | any, index: number) => {
          el.childNodes[0].childNodes[0].src = `${Country[index][0]}`;
          el.style.backgroundImage = `url(${Country[index][1]})`;
          index === Country.length - 1 && io.unobserve(articleRef.current);
        });
        loading(false);
      }
    }

    let observer: IntersectionObserver;
    if (articleRef) {
      observer = new IntersectionObserver(checkIntersect, {
        rootMargin: '0px',
        threshold: 0.1,
      });

      observer.observe(articleRef.current);
    }

    return () => observer && observer.disconnect();
  }, [articleRef]);

  return (
    <section ref={articleRef}>
      <a
        href="https://www.tripadvisor.co.kr/Attractions-g294217-Activities-Hong_Kong.html"
        target="_blank"
      >
        <article
          style={{
            backgroundImage: `url()`,
          }}
          className={classNames({
            [mainStyles.row__fluid]: true,
            [mainStyles.image__block]: true,
            [mainStyles.text__shadow]: true,
            ['travelArticle']: true,
          })}
        >
          <div className={mainStyles.center__contents}>
            <img src="" alt="Flag_of_Hongkong" />
            <h2>2020 NOVEMBER | TRAVEL TO HONG KONG </h2>
            <h3>NOVEMBER 11TH to NOVEMBER 18TH</h3>
            <button>LET'S GO</button>
          </div>
        </article>
      </a>
      <a
        href="https://www.tripadvisor.com/Tourism-g293889-Nepal-Vacations.html"
        target="_blank"
      >
        <article
          style={{
            backgroundImage: `url()`,
          }}
          className={classNames({
            [mainStyles.row__fluid]: true,
            [mainStyles.image__block]: true,
            [mainStyles.text__shadow]: true,
            ['travelArticle']: true,
          })}
        >
          <div className={mainStyles.center__contents}>
            <img src="" alt="Flag_of_Nepal" />
            <h2>2020 SEPTEMBER | TRAVEL TO Kathmandu </h2>
            <h3>SEPTEMBER 28TH to JANUARY 5TH</h3>
            <button>LET'S GO</button>
          </div>
        </article>
      </a>
      <a
        href="https://www.tripadvisor.com/Tourism-g298184-Tokyo_Tokyo_Prefecture_Kanto-Vacations.html"
        target="_blank"
      >
        <article
          style={{
            backgroundImage: `url()`,
          }}
          className={classNames({
            [mainStyles.row__fluid]: true,
            [mainStyles.image__block]: true,
            [mainStyles.text__shadow]: true,
            ['travelArticle']: true,
          })}
        >
          <div className={mainStyles.center__contents}>
            <img src="" alt="Flag_of_Japan" />
            <h2>2021 MARCH | TRAVEL TO Tokyo</h2>
            <h3>MARCH 5TH to MARCH 10TH</h3>
            <button>LET'S GO</button>
          </div>
        </article>
      </a>
    </section>
  );
}

export default Article;

const Country = [
  [
    'https://icons.iconarchive.com/icons/wikipedia/flags/64/HK-Hong-Kong-SAR-China-Flag-icon.png',
    'https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  ],
  [
    'https://icons.iconarchive.com/icons/wikipedia/flags/64/NP-Nepal-Flag-icon.png',
    'https://images.unsplash.com/photo-1526712318848-5f38e2740d44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  ],
  [
    'https://icons.iconarchive.com/icons/wikipedia/flags/64/JP-Japan-Flag-icon.png',
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1071&q=80',
  ],
];
