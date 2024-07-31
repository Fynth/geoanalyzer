import React, { useState } from 'react';
import './App.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GeoJSONMap from './GeoJSONMap';

const Layers = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLayerVisible, setIsLayerVisible] = useState(true);

  const toggle = () => {
    setIsActive(!isActive);
    setIsLayerVisible(!isLayerVisible);
  };

  return (
    <div className="map-rectangle">
      <div className="toggle-container" onClick={toggle}>
        <div className={`circle ${isActive ? 'active' : ''}`}></div>
      </div>
      {isLayerVisible && <GeoJSONMap geoJsonUrl="/date/BO.geojson" />}
    </div>
  );
};

export default Layers;