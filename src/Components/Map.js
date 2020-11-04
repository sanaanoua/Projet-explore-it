import React, { useEffect, useRef } from "react";

function Map({ options, className, onMount1, onMount2 }) {

  const props = { ref: useRef(), className };
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options);
    onMount1 && onMount1(map);
    onMount2 && onMount2(map);
  };


  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return (
    <div
      {...props}
      style={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }}
    />
  );
}
export default Map;

Map.defaultProps = {
  options: {
    center: { lat: 50.649896, lng: 3.923982 },
    zoom: 20,
    disableDefaultUI: true,
  },
};