import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// main style file
import "./assets/css/index.css";

import naive from "naive-ui";


// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

createApp(App).use(router).use(naive).use(FontAwesomeIcon).mount("#app");
