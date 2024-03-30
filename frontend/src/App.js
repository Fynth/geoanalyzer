import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

const ListItem = ({ item, onClick }) => {
  return (
    <li onClick={() => onClick(item)}>
      {item.name}
    </li>
  );
};

const MyList = ({ setPosition }) => {
  const handleItemClick = (item) => {
    console.log(`Кликнули на элемент 1: ${item.name} ${item.coordinat}`);
    setPosition(item.coordinat);
  };

  const items = [
    { id: 1, name: 'Белгород', coordinat: [50.5, 37.0] },
    { id: 2, name: 'Грайворон', coordinat: [50.478816, 35.672995] },
    { id: 3, name: 'Советская гавань', coordinat: [48.97171, 140.29037] },
  ];

  return (
    <ul>
      {items.map(item => (
          <button>
        <ListItem key={item.id} item={item} onClick={handleItemClick} />
            </button>
      ))}
    </ul>
  );
};

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <div className="panel-header">
        {title}
      </div>
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
};

const MapComponent = () => {
  const [position, setPosition] = useState([50.5, 37.0]); // Координаты центра карты
  const mapRef = useRef(null); // Создаем ссылку для хранения ссылки на карту
  const ChangeView = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null; // Не отображаем компонент
  }
  
  const mapContainerStyle = {
    height: '800px',
    width: '100%',
    margin: '0 auto', // Центрирование карты по горизонтали
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row',  height: 20 }}>
        <div style={{ flex: 1 }}>
          <Panel title="My Panel">
          </Panel>
        </div>
        <div style={{ flex: 1 }}>
          <Panel title="My Panel 2">
          </Panel>
        </div>
        <div style={{ flex: 1 }}>
          <Panel title="My Panel 3">
          </Panel>
        </div>
      </div>
      <div>
        <MyList setPosition={setPosition} />
      </div>
      <div style={{ flex: 1 }}>
      <MapContainer
          center={position}
          zoom={8}
          style={mapContainerStyle}
          whenCreated={(map) => { mapRef.current = map; }} // Сохраняем ссылку на карту при ее создании
        >
          <ChangeView center={position} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;