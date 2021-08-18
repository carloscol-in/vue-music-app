module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: "standard",

    parserOptions: {
        parser: 'babel-eslint'
    },

    rules: {
        "no-new": 0,
        "indent": ["error", 2]
    },

    plugins: [
        "html"
    ]
}