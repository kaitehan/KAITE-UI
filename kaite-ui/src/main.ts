import "./lib/kaite.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";

import { router } from "./router";

import "./lib/svg.js";
import "github-markdown-css";

import Markdown from "./components/Markdown.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Markdown", Markdown);
