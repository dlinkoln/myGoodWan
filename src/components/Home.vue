<template>
<div class="home" id="home">

      <h1 class="title">Страницы проекта</h1>
      <ul class="menu-project">
        <li>
          <router-link to="Executor">Исполнители</router-link>
          <ul>
            <li>
              <router-link to="/ExecutorCard">Исполнители карточка</router-link>
            </li>
            <li>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/Terms">Условия</router-link>
          <ul>
            <li>
              <router-link to="/TermsCard">Условия карточкa</router-link>
            </li>
            <li>
              
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/Rules">Правила</router-link>
          <ul>
            <li>
              
            </li>
            <li>
              <router-link to="/RulesCard">Правила карточкa</router-link>
            </li>
            <li>
                <router-link to="/RulesCardModal">Правила редактирование карточки + модальное окно выбора исполнителя</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="BaseStation">Базовые станции</router-link>
          <ul>
            <li>
              <router-link to="/BaseStationMap">Базовые станции на карте</router-link>
            </li>
            <li>
              <router-link to="/BaseStationCard">Базовые станции карточкa</router-link>
            </li>
            <li>
              
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/Device">Устройства</router-link>
          <ul>
            <li>
              <router-link to="/DeviceMap">Устройства на карте</router-link>
            </li>
            <li>
              <router-link to="/DeviceCard">Устройства карточкa</router-link>
            </li>
            <li>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'Home',
};
</script>
<style>

</style>