import React, { useState } from 'react';
import './App.css';
import GeoJSONMap from './GeoJSONMap';

const Layers = ({ geoJsonData }) => {
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
      {isLayerVisible && <GeoJSONMap geoJsonData={geoJsonData} />}
    </div>
  );
};

export default Layers;