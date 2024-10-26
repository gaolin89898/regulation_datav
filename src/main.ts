import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import "./assets/font/font.scss";
import Vue3SeamlessScroll from "vue3-seamless-scroll";
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';

createApp(App).use(Vue3SeamlessScroll).use(router).mount("#app");
