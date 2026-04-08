module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-id-pattern": null,         // allow camelCase IDs
    "font-family-name-quotes": null,     // allow "Ubuntu"
    "color-hex-length": null,            // allow #FFFFFF
    "alpha-value-notation": null,        // allow 50%
    "rule-empty-line-before": null       // ignore spacing rule
  }
};
