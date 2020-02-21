
import VueRouter from "vue-router";
import BaseStation from "./components/BaseStation.vue";
import BaseStationCard from "./components/BaseStationCard.vue";
import BaseStationMap from "./components/BaseStationMap.vue";
import Device from "./components/Device.vue";
import DeviceCard from "./components/DeviceCard.vue";
import DeviceMap from "./components/DeviceMap.vue";
import Executor from "./components/Executor.vue";
import ExecutorCard from "./components/ExecutorCard.vue";
import Rules from "./components/Rules.vue";
import RulesCard from "./components/RulesCard.vue";
import Terms from "./components/Terms.vue";
import TermsCard from "./components/TermsCard.vue";
import RulesCardModal from "./components/RulesCardModal.vue";
import Home from "./components/Home.vue";


const routes = [
    { path: "/", component: Home },
    { path: "/BaseStation", component: BaseStation },
    { path: "/baseStationCard", component: BaseStationCard },
    { path: "/BaseStationMap", component: BaseStationMap },
    { path: "/Device", component: Device },
    { path: "/DeviceCard", component: DeviceCard },
    { path: "/DeviceMap", component: DeviceMap },
    { path: "/Executor", component: Executor },
    { path: "/ExecutorCard", component: ExecutorCard },
    { path: "/Rules", component: Rules },
    { path: "/RulesCard", component: RulesCard },
    { path: "/Terms", component: Terms },
    { path: "/TermsCard", component: TermsCard },
    { path: "/RulesCardModal", component: RulesCardModal },
];

const router = new VueRouter({
    mode: "hash",
    routes // сокращённая запись для `routes: routes`
});
export default router;