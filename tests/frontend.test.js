const fs = require("fs");
const path = require("path");

test("login page contains username, password, and login button", () => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../public/index.html"),
    "utf8"
  );

  document.body.innerHTML = html;

  expect(document.getElementById("loginName")).not.toBeNull();
  expect(document.getElementById("loginPassword")).not.toBeNull();
  expect(document.getElementById("loginButton")).not.toBeNull();
});
