/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

  }, []);

  return (
    <div className="map">
      <input type="text" id="address"/>
      <div className="MapContainer" id="map">
      </div>
    </div>
  );
};

export default Map;