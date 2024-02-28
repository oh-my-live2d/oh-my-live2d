import { defineClientConfig } from "@vuepress/client";
import OML2D from "./component/oh-my-live2d.vue";

export default defineClientConfig({
  rootComponents: [OML2D],
});
