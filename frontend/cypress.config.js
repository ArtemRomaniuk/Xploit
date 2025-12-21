import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },

    viewportWidth: 800,
    viewportHeight: 640,

    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
