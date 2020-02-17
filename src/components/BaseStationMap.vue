<template>
  <div class="basestationMap" id="basestationMap">
    <div class="title">
      <div class="left">
        <h1 class="title">Базовые станции</h1>
      </div>
      <div class="right">
        <a href="/base_station_map.html">
          <svg
            class="img-svg active"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4502 2C6.9302 2 2.4502 6.48 2.4502 12C2.4502 17.52 6.9302 22 12.4502 22C17.9702 22 22.4502 17.52 22.4502 12C22.4502 6.48 17.9702 2 12.4502 2ZM11.4502 19.93C7.5002 19.44 4.4502 16.08 4.4502 12C4.4502 11.38 4.5302 10.79 4.6602 10.21L9.4502 15V16C9.4502 17.1 10.3502 18 11.4502 18V19.93ZM16.4502 16C17.3502 16 18.0902 16.58 18.3502 17.39C19.6502 15.97 20.4502 14.08 20.4502 12C20.4502 8.65 18.3802 5.78 15.4502 4.59V5C15.4502 6.1 14.5502 7 13.4502 7H11.4502V9C11.4502 9.55 11.0002 10 10.4502 10H8.4502V12H14.4502C15.0002 12 15.4502 12.45 15.4502 13V16H16.4502Z"
              fill="#AAB7D4"
            />
          </svg>
        </a>
        <a href="/base_station.html">
          <svg
            class="img-svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C4 4.44772 4.44772 4 5 4H20C20.5523 4 21 4.44772 21 5V7C21 7.55228 20.5523 8 20 8H5C4.44772 8 4 7.55228 4 7V5ZM4 13C4 13.5523 4.44772 14 5 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10H5C4.44772 10 4 10.4477 4 11V13ZM4 19C4 19.5523 4.44772 20 5 20H20C20.5523 20 21 19.5523 21 19V17C21 16.4477 20.5523 16 20 16H5C4.44772 16 4 16.4477 4 17V19Z"
              fill="#AAB7D4"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="map" id="map">
      <iframe
        src="https://yandex.ua/map-widget/v1/?um=constructor%3Abb0100b6de2af2c4211a5914a1cc95edbfbbae424caa34c23b571b49d09d2f80&amp;source=constructor"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseStationMao',
};
</script>

<style>
</style>
