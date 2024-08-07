import React, { useState, useRef } from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function ContactInfo(props) {
  return (
    <div className="contact-info">
      <h2>Контактная информация</h2>
      <p>Имя: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Телефон: {props.phone}</p>
    </div>
  );
}



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
    { id: 3, name: 'Советская гавань', coordinat: [48.97171, 140.29037] },
  ];

  return ( // возвращает список элиментов, которые можно кликать
    <ul>
      {items.map(item => (
          <button>
        <ListItem key={item.id} item={item} onClick={handleItemClick} />
            </button>
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

const MapComponent = () => {
  const [viewport, setViewport] = useState({

    width: '800px', // Задайте фиксированную ширину
    height: '600px', // Задайте фиксированную высоту
  });

  return (
      <ReactMapGL
        {...viewport}
        mapboxAccessToken="pk.eyJ1Ijoic3RpY2tzMDIyMCIsImEiOiJjbDFpbDVjczYwdW40M2dxdWNwcGltMGoxIn0.kWELbv7_2AW1__dUCeD20A"
        mapStyle={"mapbox://styles/mapbox/outdoors-v11"}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
         <div className="viewPortnfo">
          <div>
            <strong>Longitude:</strong>
            <span> {viewport.longitude}</span>
          </div>
          <div>
            <strong>Latitude:</strong> <span>{viewport.latitude}</span>
          </div>

        </div>
      </ReactMapGL>

  );
};




const VisulSait = () => {
  return (
    <div class="my-background">  
      <div class ="menu-hotizontal">
        <div class="logo">
          <img src="/Picture/Logo.jpg" alt="Logo" width= "20%"/>
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
      Мы группа молодых, амбициозных студентов, которые собрались вместе, чтобы воплотить свою уникальную идею в жизнь с помощью стартапа. Наша команда состоит из разносторонних талантливых индивидуумов, которые объединились вокруг общей страсти к инновациям и разработке приложений.
      </div>  
    <img class="project-image" src="" alt="Изображение проекта" />
    </div>

    <div class="team-container">
      <div class="team-member">
        <img src="Picture/Kirill.jpg" alt="Photo 1"/>
        <div class="team-member-info">
          Кирилл
        </div>
      </div>
      <div class="team-member">
        <img src="Picture/Egor.jpg" alt="Photo 1"/>       
        <div class="team-member-info">
          Егор
        </div>
      </div>
      <div class="team-member">
        <img src="Picture/Rasul.jpg" alt="Photo 1"/>
        <div class="team-member-info">
          Расул
        </div>
      </div>
      <div class="team-member">
        <img src="Picture/Sofa.jpg" alt="Photo 1"/>
        <div class="team-member-info">
          София
        </div>
      </div>

    </div>

    <div class="team">
      <div class="idea-info">
      Наша команда стремится создать инновационное приложение для геоанализа, которое поможет предпринимателям принимать обоснованные решения о возможности открытия бизнеса на основе подробной базы геоданных.
      </div>
    <img src="Picture/Pomenat.png" alt="Изображение проекта" width= "40%"/>
    </div>
    
    <div >
      <div class="map">
      {MapComponent()}
      </div>

    
    </div>

<div class="Analogi_table">
  <div>
    Аналоги
    <table class="Analog_table">
      <thead>
        <tr>
          <td>Название</td>
          <td>Описание</td>
          <td>Недостатки</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Сбер Геоаналитика</td>
          <td>Текст</td>
        </tr>
        <tr>
          <td>2GIS Аналитика</td>
          <td>Текст</td>
        </tr>
        <tr>
          <td>Компас от Тинькофф Бизнес</td>
          <td>Текст</td>
        </tr>
        <tr>
          <td>Геоинтеллект от Яндекс</td>
          <td>Текст</td>
        </tr>
        <tr>
          <td>Билайн.Геоаналитика</td>
          <td>Текст</td>
        </tr>
        <tr>
          <td>ГеоКурсор VK</td>
          <td>Текст</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    
    <div Class="Advantages">
      Приемущества
      <ul class="tilesWrap_Advantages">
  <li>
    <h2>01</h2>
    <h3>Рациональное принятие решений</h3>
    <p>
    Благодаря анализу геоданных и использованию алгоритмов, приложение помогает предпринимателям принимать обоснованные решения при выборе места для открытия бизнеса. Это позволяет минимизировать риски и повышает шансы на успех.
    </p>
  </li>
  <li>
    <h2>02</h2>
    <h3>Индивидуальные рекомендации</h3>
    <p>
    Приложение учитывает предпочтения и критерии пользователя, предоставляя индивидуальные рекомендации о наиболее подходящих местах для открытия бизнеса. Это помогает пользователю найти идеальное местоположение, соответствующее его уникальным потребностям и целям.
    </p>

  </li>
  <li>
    <h2>03</h2>
    <h3>Экономия времени и ресурсов</h3>
    <p>
    Приложение сокращает время и затраты на исследование и анализ геоданных вручную. Пользователи могут получить все необходимые данные и рекомендации в одном месте, что позволяет им сосредоточиться на других аспектах развития бизнеса.
    </p>
  </li>
  <li>
    <h2>04</h2>
    <h3>Свежие данные и обновления</h3>
    <p>
    Приложение обновляет базу геоданных регулярно, чтобы пользователи всегда имели доступ к актуальной информации. Это позволяет следить за изменениями в рыночной среде и адаптироваться к новым трендам и возможностям.
    </p>
  </li>
</ul>
    </div >
<div >
      <ContactInfo name="Кирилл Бабушкин" email="sticks0220@gmail.com" phone="+7 951 153 73 29" />
</div>
</div>
  );
}

export default VisulSait;

