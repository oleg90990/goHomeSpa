{
  "defaultSeverity": "warning",
  "extends": ["tslint:recommended"],
  "linterOptions": {
    "exclude": ["node_modules/**", "**/*.json"]
  },
  "rules": {
    "only-arrow-functions": false,
    "no-console": true,
    "no-shadowed-variable": false,
    "curly": true,
    "arrow-parens": [true, "ban-single-arg-parens"],
    "quotemark": [false],
    "indent": [true, "spaces", 2],
    "interface-name": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "no-consecutive-blank-lines": false,
    "semicolon":false,
    "@typescript-eslint/no-inferrable-types": 2,
    "no-var": 0
  },
  "jsRules": {
    "no-console": true
  }
}
