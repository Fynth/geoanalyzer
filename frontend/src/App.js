import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';



const ListItem = ({ item, onClick }) => { //кликабельные списки
  return (
    <li onClick={() => onClick(item)}>
      {item.name}
    </li>
  );
};

const MyList = ({ setPosition }) => { //вывод информации о обьекте списка и обновление координат центра карты
  const handleItemClick = (item) => {
    console.log(`Кликнули на элемент 1: ${item.name} ${item.coordinat}`);
    setPosition(item.coordinat);
  };

  const items = [
    { id: 1, name: 'Белгород', coordinat: [50.5, 37.0] },
    { id: 2, name: 'Грайворон', coordinat: [50.478816, 35.672995] },
    { id: 3, name: 'Советсая гавань', coordinat: [48.97171, 140.29037] },
  ];

  return ( // возвращает список элиментов, которые можно кликать
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} onClick={handleItemClick} />
      ))}
    </ul>
  );
};

const Panel = ({ title, children }) => { // функция для создания понелей
  return (
    <div>
      <div class="menuitem">
        {title}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

const MapComponent = () => { //основное тело сайта, переделать адекватно, чтоб карта создавалась в отдельной функции
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
  );
};

const VisulSait = () => {
  return (
    <div>
      <div class ="menu-hotizontal">
        <div class="menu-horizontal-logo">    
        Тут будет наша эмблема
        </div>
        <div class="menu-horizontal__menu-wrapper">
          <Panel title="О нас" role="menuitem">
          </Panel>
          <Panel title="Члены команды" role="menuitem">
          </Panel>
          <Panel title="Идея" role="menuitem">
          </Panel>
          <Panel title="Демоверсия" role="menuitem">
          </Panel>
          <Panel title="Аналоги" role="menuitem">
          </Panel>
          <Panel title="Приемущества" role="menuitem">
          </Panel>
      </div>
    </div>
    <div class="team">
      <div class="team-info">
        Информация про нашу команду
      </div>
    <img class="project-image" src="" alt="Изображение проекта" />
    </div>

    <div class="team-container">
      <div class="team-member">
        <image src="" alt="Photo 1"/>
        <div class="team-member-info">
          Егор
        </div>
      </div>
      <div class="team-member">
        <image src="" alt="Photo 1"/>
        <div class="team-member-info">
          Егор
        </div>
      </div>
      <div class="team-member">
        <image src="" alt="Photo 1"/>
        <div class="team-member-info">
          Егор
        </div>
      </div>
      <div class="team-member">
        <image src="" alt="Photo 1"/>
        <div class="team-member-info">
          Егор
        </div>
      </div>

    </div>

    <div class="team">
      <div class="team-info">
        Описание идеи
      </div>
    <img class="project-image" src="" alt="Изображение проекта" />
    </div>
    
    <div id="map-container" class="map">
      {MapComponent()}
    
    </div>

    <div class="team">
      <div class="team-info">
        Аналоги
        <table id="my-table">
          <tr>
            <td>Название</td>
            <td>Описание</td>
          </tr>
          <tr>
            <td>Текст</td>
            <td>Текст</td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      Приемущества
      <ul>
        <li>Первый элемент списка</li>
        <li>Второй элемент списка</li>
        <li>Третий элемент списка</li>
      </ul>
    </div>
    <div>
      Контактная информация
    </div>
  </div>

  );
}

export default VisulSait;