import "./lib/kaite.scss";
import "./index.scss";
import "github-markdown-css";

import { createApp, nextTick } from "vue";
import App from "./App.vue";

import { router } from "./router";

import "./assets/svg.js";

import Markdown from "./components/Markdown.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Markdown", Markdown);
