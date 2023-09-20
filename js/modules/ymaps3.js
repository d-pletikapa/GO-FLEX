/* eslint-disable require-jsdoc */
// Yandex map 3.0
let map = null;
// Главная функция, вызывается при запуске скрипта
main();
async function main() {
  // ожидание загрузки модулей
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapControls,
    YMapDefaultFeaturesLayer,
    YMapMarker,
  } = ymaps3;

  // Импорт модулей для элементов управления на карте
  const {
    YMapZoomControl,
    YMapGeolocationControl,
  } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
  const {YMapOpenMapsButton} = await ymaps3
      .import('@yandex/ymaps3-controls-extra');
  const {YMapDefaultMarker} = await ymaps3
      .import('@yandex/ymaps3-markers@0.0.1');

  // Координаты центра карты
  const CENTER_COORDINATES = [55.753042, 37.604064];
  // координаты метки на карте
  const MARKER_COORDINATES = [55.753042, 37.604064];

  // Объект с параметрами центра и зумом карты
  const LOCATION = {
    center: CENTER_COORDINATES,
    zoom: 10, // max 21
  };

  // Создание объекта карты
  map = new YMap(document.getElementById('map'), {location: LOCATION});

  // Добавление слоев на карту
  const scheme = new YMapDefaultSchemeLayer();
  map.addChild(scheme);
  map.addChild(new YMapDefaultFeaturesLayer());

  // Добавление элементов управления на карту
  map.addChild(new YMapControls({position: 'right'})
      .addChild(new YMapZoomControl({})),
  );
  map.addChild(new YMapControls({position: 'top right'})
      .addChild(new YMapGeolocationControl({})),
  );

  // Создание маркера
  const el = document.createElement('img');
  el.className = 'first-marker';
  el.src = './img/logo.svg';
  el.title = 'GO';
  // При клике на маркер меняем центр карты на LOCATION с заданным duration
  el.onclick = () => map.update({location: {...LOCATION, duration: 1000}});

  // Создание заголовка маркера
  const markerTitle = document.createElement('div');
  markerTitle.className = 'marker-title';
  markerTitle.innerHTML = 'GAME OVER';

  // Контейнер для элементов маркера
  const imgContainer = document.createElement('div');
  imgContainer.appendChild(el);
  imgContainer.appendChild(markerTitle);

  // Добавление центра карты
  map.addChild(new YMapMarker({coordinates: CENTER_COORDINATES}));

  // Добавление маркера на карту
  map.addChild(new YMapMarker({coordinates: MARKER_COORDINATES}, imgContainer));
}
