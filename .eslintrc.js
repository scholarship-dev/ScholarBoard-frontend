module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/label-has-for": [2, {
            "components": ["Label"],
            "required": {
                "some": ["nesting", "id"]
            },
            "allowChildren": false,
        }],
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }]
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "mocha": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
}