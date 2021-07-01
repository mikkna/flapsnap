const ghpages = require("gh-pages");
const chalk = require("chalk");

const { homepage } = require("../package");

ghpages.publish("build", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(
    chalk.green("Successfully published to ") + chalk.green.bold(homepage)
  );
});
