module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "curly": [
      "error",
      "multi-line"
    ],
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "no-restricted-globals": [
      "error",
      {
        "name": "event",
        "message": "Listener function's event parameter is missing."
      }
    ],
    "padded-blocks": "off",
    "semi": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ]
  },
};
