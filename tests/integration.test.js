const fs = require("fs");
const path = require("path");

test("frontend JavaScript is configured to call expected API endpoints", () => {
  const js = fs.readFileSync(
    path.resolve(__dirname, "../public/js/code.js"),
    "utf8"
  );

  expect(js).toContain("Login.");
  expect(js).toContain("AddColor.");
  expect(js).toContain("SearchColors.");
  expect(js).toContain("XMLHttpRequest");
});
