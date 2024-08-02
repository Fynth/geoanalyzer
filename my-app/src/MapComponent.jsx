import React, { useState, useEffect } from 'react';
import './App.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = ({ children }) => {
  const [viewport, setViewport] = useState({
    longitude: 94,
    latitude: 66,
    zoom: 2
  });

  

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken="pk.eyJ1Ijoic3RpY2tzMDIyMCIsImEiOiJjbDFpbDVjczYwdW40M2dxdWNwcGltMGoxIn0.kWELbv7_2AW1__dUCeD20A"
        mapStyle={"mapbox://styles/mapbox/satellite-v9"}
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <div className="Longitude">
          <strong>Долгота:</strong> <span> {viewport.longitude.toFixed(2)}</span>
        </div>
        <div className="Latitude">
          <strong>Широта:</strong> <span>{viewport.latitude.toFixed(2)}</span>
        </div>
        <div className="map-container">
          {children}
        </div>
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;