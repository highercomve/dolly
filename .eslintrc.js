// "postbuild": "purgecss --css build/static/css/*.css --content build/static/index.html build/static/js/*.js --out build/static/css"

module.exports = {
    "globals": {
        "it": true,
        "fetch": true,
        "location": true,
        "localStorage": true
    },
    "extends": [
        "standard",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    "env": {
        "jest/globals": true
    },
    "plugins": [
        "react",
        "jest"
    ],
    "settings": {
        "react": {
            "version": "detect",
            "pragma": "React"
        }
    },
    "rules": {
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "no-console": ["error", { allow: ["warn", "info"] }],
        "jsx-a11y/anchor-is-valid": 0,
        "react/prop-types": 0,
        "no-nested-ternary": 0,
        "camelcase": 0,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "jsx": true
        }
    }
};