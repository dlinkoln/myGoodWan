<template>
  <div class="basestationCard" id="basestationCard">
    <div class="title">
      <div class="left">
        <router-link to="/BaseStation">
          <svg
            class="img-svg-arrow"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.75 7.91289L0.768295 4.5L4.75 1.08711V7.91289Z" stroke="#979797" />
            <path d="M5.5 4.5H17.5" stroke="#979797" stroke-linecap="square" />
          </svg> Назад
        </router-link>
        <h1>ID: 53118865 (Базовая станция)</h1>
      </div>
      <div class="right">
        <a href>
          <svg
            class="img-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
              fill="#AAB7D4"
            />
          </svg>
        </a>
        <a href="/base_station_card_edit.html">
          <svg
            class="img-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"
              fill="#AAB7D4"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="tabs_2">
      <input class="input_tabs" id="tab1" type="radio" name="tabs_2" checked />
      <label class="label_tabs" for="tab1" title>Карточка</label>
      <input class="input_tabs" id="tab2" type="radio" name="tabs_2" />
      <label class="label_tabs label_span" for="tab2" title>
        События
        <span>3</span>
      </label>
      <section id="content-tab1">
        <div class="card">
          <div class="form_card">
            <label for>ID</label>
            <input type="text" value="53118865" disabled />
            <label for>Владелец</label>
            <select name id disabled>
              <option value>GoodWAN</option>
              <option value>GoodWAN 2</option>
              <option value>GoodWAN 3</option>
            </select>
            <div class="line"></div>
            <label for>Часовой пояс</label>
            <select name id disabled>
              <option value>Москва</option>
              <option value>Уфа</option>
              <option value>Питер</option>
            </select>
            <label for>Широта</label>
            <input type="text" value="55°37'20''" disabled />
            <label for>Долгота</label>
            <input type="text" value="37°37'16''" disabled />
            <div class="line"></div>
            <label for>Описание</label>
            <textarea name id disabled>Датчики температуры нужны для того, чтобы проконтролировать температуру в помещении, жидкости, твердого объекта.</textarea>
            <div class="line"></div>
            <label for>Расписание</label>
            <a class="choice" title="Выбор условия">
              10 minutes security interval
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.2829 15.21 11.9733 14.4408 12.6455C13.711 13.2833 13 13.9046 13 15H11C11 13.1787 11.9421 12.4566 12.7704 11.8217C13.4202 11.3236 14 10.8792 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z"
                  fill="#AAB7D4"
                />
              </svg>
            </a>
          </div>
          <div class="map" id="map">
            <iframe
              src="https://yandex.ua/map-widget/v1/?um=constructor%3Abb0100b6de2af2c4211a5914a1cc95edbfbbae424caa34c23b571b49d09d2f80&amp;source=constructor"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </section>
      <section id="content-tab2">
        <div class="table_event">
          <div class="date">
            <p>От</p>
            <div class="input">
              <input type="date" />
            </div>
            <p>До</p>
            <div class="input">
              <input type="date" />
            </div>
          </div>
          <div class="line"></div>
          <div class="block_table">
            <table>
              <thead>
                <tr>
                  <th>
                    Станции
                    <svg
                      class="img-svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.619622">
                        <path
                          opacity="0.8"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6L8 0H0L4 6Z"
                          fill="#B6BED2"
                        />
                      </g>
                    </svg>
                  </th>
                  <th class="device">
                    Устройство
                    <svg
                      class="img-svg active"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.619622">
                        <path
                          opacity="0.8"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6L8 0H0L4 6Z"
                          fill="#B6BED2"
                        />
                      </g>
                    </svg>
                  </th>
                  <th>
                    Часовой пояс
                    <svg
                      class="img-svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.619622">
                        <path
                          opacity="0.8"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6L8 0H0L4 6Z"
                          fill="#B6BED2"
                        />
                      </g>
                    </svg>
                  </th>
                  <th>
                    Дата
                    <svg
                      class="img-svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.619622">
                        <path
                          opacity="0.8"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6L8 0H0L4 6Z"
                          fill="#B6BED2"
                        />
                      </g>
                    </svg>
                  </th>
                  <th>
                    Время
                    <svg
                      class="img-svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.619622">
                        <path
                          opacity="0.8"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6L8 0H0L4 6Z"
                          fill="#B6BED2"
                        />
                      </g>
                    </svg>
                  </th>
                  <th>
                    Данные
                    <svg
                      class="img-svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.619622">
                        <path
                          opacity="0.8"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6L8 0H0L4 6Z"
                          fill="#B6BED2"
                        />
                      </g>
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>53118865</td>
                  <td class="device">5075</td>
                  <td>Москва</td>
                  <td>28/5/2018</td>
                  <td>09:10:11</td>
                  <td>83.75</td>
                </tr>
                <tr>
                  <td>53118865</td>
                  <td class="device">5075</td>
                  <td>Москва</td>
                  <td>28/5/2018</td>
                  <td>09:10:11</td>
                  <td>83.75</td>
                </tr>
                <tr>
                  <td>53118865</td>
                  <td class="device">5075</td>
                  <td>Москва</td>
                  <td>28/5/2018</td>
                  <td>09:10:11</td>
                  <td>83.75</td>
                </tr>
                <tr>
                  <td>53118865</td>
                  <td class="device">5075</td>
                  <td>Москва</td>
                  <td>28/5/2018</td>
                  <td>09:10:11</td>
                  <td>83.75</td>
                </tr>
                <tr>
                  <td>53118865</td>
                  <td class="device">5075</td>
                  <td>Москва</td>
                  <td>28/5/2018</td>
                  <td>09:10:11</td>
                  <td>83.75</td>
                </tr>
                <tr>
                  <td>53118865</td>
                  <td class="device">5075</td>
                  <td>Москва</td>
                  <td>28/5/2018</td>
                  <td>09:10:11</td>
                  <td>83.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseStationCard',
};
</script>

<style>
</style>
