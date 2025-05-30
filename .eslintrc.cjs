/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",          // ✅ Reglas recomendadas por Vercel para Next.js
    "plugin:react/recommended",      // ✅ Reglas recomendadas para React
    "plugin:react-hooks/recommended" // ✅ Reglas para hooks
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh", // 🔄 Opcional si estás usando React Fast Refresh en dev
  ],
  rules: {
    "react-refresh/only-export-components": "warn", // ⚠️ Útil en proyectos con HMR
    // Otras reglas personalizadas acá si querés...
  },
  settings: {
    react: {
      version: "18.2", // o "detect" para autodetección
    },
  },
};
