<template>
  <div class="executoCard" id="executoCard">
    <div class="title">
      <div class="left">
        <router-link to="Executor">
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
        <h1>http get test</h1>
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
        <a href="/executor_card_edit.html">
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
    <div class="card">
      <div class="form_card">
        <label for>Наменование</label>
        <select name id disabled>
          <option value>http get test</option>
          <option value>http get test 2</option>
          <option value>http get test 3</option>
        </select>
        <form action id="chek">
          <input type="checkbox" id="checkbox-id" checked disabled />
          <label for="checkbox-id">Активен</label>
        </form>
        <div class="line"></div>
        <label for>Описание</label>
        <textarea name id disabled>Датчики температуры нужны для того, чтобы проконтролировать температуру в помещении, жидкости, твердого объекта.</textarea>
        <div class="line"></div>
        <label for>Тип</label>
        <input type="text" value="http post" disabled />
        <label for>Аутентификатор</label>
        <input type="text" value="no auth" disabled />
        <label for>Точка доступа</label>
        <input type="text" value="https://srv04.goodwan.ru/hooks/ping" disabled />
        <label for>Telegram groups</label>
        <select name id disabled>
          <option value>Ttg</option>
          <option value>Ttg 2</option>
          <option value>Ttg 3</option>
        </select>
        <div class="line"></div>
        <label for>Сообщение</label>
        <textarea name id disabled>{'dev':${dev}, 'timestamp':'${timestamp_utc}', 'data':${data}}</textarea>
        <div class="line"></div>
        <label for>Отправить почту охраннику</label>
        <input type="text" value="vaysa@oxpana.net" />
        <div class="line"></div>
        <label for>Параметр</label>
        <div class="param">
          <input type="text" value="Длина 100" disabled />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExecutorCard',
};
</script>

<style>
</style>
