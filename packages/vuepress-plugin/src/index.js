import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oml2dPlugin = (options = {}) => {
  return function () {
    const oml2dClienFilePath = path
      .resolve(__dirname, "./oml2d-clien-file.js")
      .replaceAll("\\", "/");
    return {
      name: "vuepress-plugin-oh-my-live2d",
      define: {
        omlOptions: options,
      },
      multiple: false,
      clientConfigFile: oml2dClienFilePath,
    };
  };
};
export { oml2dPlugin };
