import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

const problematicEnvVars = [
  "3DVPATH",
  "CommonProgramFiles(x86)",
  "ProgramFiles(x86)",
  "IntelliJ IDEA Community Edition",
];

problematicEnvVars.forEach((varName) => {
  delete process.env[varName];
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all")],
});
