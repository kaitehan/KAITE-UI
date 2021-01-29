import Dialog from "./Dialog/Dialog.vue";
import Button from "./Button.vue";
import Switch from "./Switch.vue";
import Input from "./Input.vue";
import Tabs from "./Tabs/Tabs.vue";
import Tab from "./Tabs/Tab.vue";
import { ComponentOptions } from "vue";

export default {
  install: (app: ComponentOptions) => {
    // Plugin code goes here
    app.component("Switch", Switch);
    app.component("Input", Input);
    app.component("Button", Button);
    app.component("Dialog", Dialog);
    app.component("Tab", Tab);
    app.component("Tabs", Tabs);
  },
};
