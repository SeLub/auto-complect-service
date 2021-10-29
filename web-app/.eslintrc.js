module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  required: {
    some: ["nesting", "id"],
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  settings: {
    react: {
      version: "latest", // instead of 'detect'
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".native.js"],
        moduleDirectory: ["node_modules"],
        paths: ["./src"],
      },
    },
  },
};
