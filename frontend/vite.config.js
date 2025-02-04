import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-nwakaku-xagent-75c0ut5e2f7.ws-eu117.gitpod.io"],
  },
});
