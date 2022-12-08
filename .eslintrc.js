export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    'jsx-runtime': {
        plugins: [
            'react'
        ],
        rules: {
            'react/react-in-jsx-scope': 0,
            'react/jsx-uses-react': 0
        }
    },
    "rules": {
        "@typescript-eslint/triple-slash-reference": 0
    }
}
