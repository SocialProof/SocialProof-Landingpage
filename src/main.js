import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
import "@/assets/styles/styles.scss";
Vue.config.productionTip = false;
import AOS from "aos";
import "aos/dist/aos.css";

 
 
 
new Vue({
     router,
     store,
     created() {
          AOS.init();
     },
     render: (h) => h(App),
}).$mount("#app");
