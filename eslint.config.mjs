import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:tailwindcss/recommended"
  ],
  plugins: ["prettier", "tailwindcss"],
  rules: {
    "prettier/prettier": "error",
    "react/no-unknown-property": "off"
  },
  ignorePatterns: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]
}

module.exports = eslintConfig

