import React, { useEffect, useRef } from 'react';
import mainStyles from '../styles/Main.module.css';

function Map() {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const onLoad = () => {
      new window.google.maps.Map(ref.current, {
        center: { lat: 37, lng: 126 },
        zoom: 6,
      });
    };

    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDN8ZBVpSEDmrEDxPukI7guJ89eP4IvhME`;
      document.body.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, []);

  return <div ref={ref} className={mainStyles.googleMap} />;
}

export default React.memo(Map);
