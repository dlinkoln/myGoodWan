<template>
  <div class="termsCardModal" id="termsCard">
        <div class="main" id="main">
        <div class="title">
            <div class="left">
               <router-link to="/Rules">
                    <svg class="img-svg-arrow" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 7.91289L0.768295 4.5L4.75 1.08711V7.91289Z" stroke="#979797"/>
                    <path d="M5.5 4.5H17.5" stroke="#979797" stroke-linecap="square"/>
                    </svg> Назад
                </router-link>
                <h1>Правило 1</h1>
            </div>
            <div class="right">
                <router-link to="/RulesCard">
                    <button class="blue">Сохранить</button>
                </router-link>
                <router-link to="/RulesCard">
                    <button>Отмена</button>
                </router-link>
                <a href="">
                    <svg class="img-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z" fill="#AAB7D4"/>
                    </svg>
                </a>
                <a href="/rules_card_edit.html">
                    <svg class="img-svg active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z" fill="#AAB7D4"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="card">
            <div class="form_card card_edit">
                <label for="">Наменование</label><input type="text" value="Правило 1">
                <form action="" id="chek"><input type="checkbox" id="checkbox-id" checked><label for="checkbox-id">Активен</label></form>
                <div class="line"></div>
                <label for="">Описание</label>
                <textarea name="" id="">Датчики температуры нужны для того, чтобы проконтролировать температуру в помещении, жидкости, твердого объекта.</textarea>
                <div class="line"></div>
                <label for="">Исполнитель</label>
                <a class="choice edit" href="#openModalExecutor">http get test 
                    <svg class="img-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z" fill="#AAB7D4"/>
                    </svg>
                </a><br>
                <label for="">Месторасположение</label>
                <select name="" id="">
                    <option value="">Саранск</option>
                    <option value="">Москва</option>
                    <option value="">Уфа</option>
                </select>
                <label for="">Условие</label>
                <a class="choice edit" href="#openModalExecutor">Не выбрано 
                    <svg class="img-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z" fill="#AAB7D4"/>
                    </svg>
                </a><br>
            </div>
        </div>
    </div>
    <div id="openModalExecutor" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <a href="#close" title="Close" class="close"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3334 8.54675L23.4534 6.66675L16.0001 14.1201L8.54675 6.66675L6.66675 8.54675L14.1201 16.0001L6.66675 23.4534L8.54675 25.3334L16.0001 17.8801L23.4534 25.3334L25.3334 23.4534L17.8801 16.0001L25.3334 8.54675Z" fill="#B9C6E0"/>
                    </svg>
                </a>
                <div class="tabs">
                    <input class="input_tabs" id="tab1" type="radio" name="tabs" checked>
                    <label class="label_tabs" for="tab1">http get test</label class="label_tabs">

                    <input class="input_tabs" id="tab2" type="radio" name="tabs">
                    <label class="label_tabs" for="tab2" title="">Вкладка 2</label>

                    <input class="input_tabs" id="tab3" type="radio" name="tabs">
                    <label class="label_tabs" for="tab3" title="">Вкладка 3</label>

                    <input class="input_tabs" id="tab4" type="radio" name="tabs">
                    <label class="label_tabs" for="tab4" title="">Вкладка 4</label>

                    <section id="content-tab1">
                        <div class="card">
                            <div class="form_card card_edit" style="width: 100%;">
                                <button class="blue">Выбрать этого исполнителя</button>
                                <div class="line"></div>
                                <form action="" id="chek"><input type="checkbox" id="checkbox-id-2" checked><label for="checkbox-id-2">Активен</label></form>
                                <div class="line"></div>
                                <label for="">Описание</label>
                                <textarea name="" id="">Датчики температуры нужны для того, чтобы проконтролировать температуру в помещении, жидкости, твердого объекта.</textarea>
                                <div class="line"></div>
                                <label for="">Тип</label><input type="text" value="http post">
                                <label for="">Аутентификатор</label><input type="text" value="no auth">
                                <label for="">Точка доступа</label><input type="text" value="https://srv04.goodwan.ru/hooks/ping">
                                <label for="">Telegram groups</label>
                                <select name="" id="">
                                    <option value="">Ttg</option>
                                    <option value="">Ttg 2</option>
                                    <option value="">Ttg 3</option>
                                </select>
                                <div class="line"></div>
                                <label for="">Сообщение</label>
                                <textarea name="" id="">{'dev':${dev}, 'timestamp':'${timestamp_utc}', 'data':${data}}</textarea>
                            </div>
                        </div>
                    </section>
                    <section id="content-tab2">
                        <p>
                            Здесь размещаете любое содержание....
                        </p>
                    </section>
                    <section id="content-tab3">
                        <p>
                            Здесь размещаете любое содержание....
                        </p>
                    </section>
                    <section id="content-tab4">
                        <p>
                            Здесь размещаете любое содержание....
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RulesCardModal',
};
</script>

<style>
</style>
