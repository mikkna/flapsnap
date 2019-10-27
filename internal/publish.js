const ghpages = require('gh-pages');
const chalk = require('chalk');

const { homepage } = require('../package');

ghpages.publish('build', () => console.log(chalk.green('Successfully published to ') + chalk.green.bold(homepage)));