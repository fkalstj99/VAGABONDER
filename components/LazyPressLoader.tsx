import mainStyles from '../styles/Main.module.css';
import React, { ImgHTMLAttributes, useEffect, useRef } from 'react';

const LazyPressLoader = React.memo(() => {
  const pressRef = useRef<HTMLTableSectionElement>();

  useEffect(() => {
    function checkIntersect(entries, io) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = image[entry.target.alt];

          io.unobserve(entry.target);
        }
      });
    }
    /*
let observer = new IntersectionObserver(callback, options);
callback -> 교차지점에 들어섰을 때 실행되나.
*/ let observer: IntersectionObserver;
    //가시성이 감시될 root 내부의 element. 해당 엘리먼트는 루트 엘리먼트의 자손 노드여야 합니다(혹은 현재 root가 document의 viewport일 때는 현재 document 내부의 엘리먼트여야 합니다).
    if (pressRef) {
      observer = new IntersectionObserver(checkIntersect, {
        rootMargin: '0px',
        threshold: 0.1,
      });

      const pressImage = document.querySelectorAll('.pressImage');
      pressImage.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer && observer.disconnect();
  }, [pressRef]);
  return (
    <>
      <section ref={pressRef} className={mainStyles.press}>
        <img
          alt="VOGUE"
          src=""
          style={{ width: '250px' }}
          className="pressImage"
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="travler"
          src=""
          style={{ width: '250px' }}
          className="pressImage"
        />
        <img
          alt="WarbyParker"
          style={{
            height: '160px',
          }}
          src=""
          className="pressImage"
        />
        <img
          alt="goop"
          style={{
            height: '280px',
          }}
          src=""
          className="pressImage"
        />
        <img
          alt="MR_POTER"
          style={{
            height: '280px',
            width: '270px',
          }}
          src=""
          className="pressImage"
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="freePeople"
          style={{ width: '250px', paddingBottom: '20px' }}
          src=""
          className="pressImage"
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="secret_escapes"
          style={{ width: '250px', paddingBottom: '20px' }}
          src=""
          className="pressImage"
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="A_CONTINUOS_LEAN"
          style={{ width: '200px', paddingBottom: '20px' }}
          src=""
          className="pressImage"
        />
      </section>
    </>
  );
});

export default LazyPressLoader;

const image = {
  VOGUE: 'http://sc.vaesite.com/__data/uploads/images/VOGUE_LOGO_svg.png',
  travler: 'http://sc.vaesite.com/__data/uploads/images/travler1.jpg',
  WarbyParker:
    'http://sc.vaesite.com/__data/uploads/images/WarbyParkerLogo_Stacked%20(1).jpg',

  goop: 'http://sc.vaesite.com/__data/uploads/images/goop-logo.jpg',
  MR_POTER:
    'http://sc.vaesite.com/__data/uploads/images/57949950eb4947bc741a3029cc8a5701.jpg',

  freePeople:
    'http://sc.vaesite.com/__data/uploads/images/free-people-logo.png',

  secret_escapes:
    'http://sc.vaesite.com/__data/uploads/images/9241fe1c90059798103a99429e05a12f233edbb2.png',

  A_CONTINUOS_LEAN:
    'http://sc.vaesite.com/__data/uploads/images/logo%20(1).png',
};
