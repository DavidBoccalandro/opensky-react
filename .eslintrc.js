module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        // "airbnb",
        "airbnb-typescript",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/label-has-associated-control": "off",
    },
    "ignorePatterns" : [
        ".eslintrc.js",
    ]
};
