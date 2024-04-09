# Puppy Desktop Test Framework

## Preparation

- Install Node.js with all extension
- Install firefox and chrome
- Java must be installed to run allure reports

Run `npm ci` to install all dependencies.

> You can use `npm install` as well.

## Configuring Environment

Environment is predefined in baseUrl in wdio.conf.ts

## Running tests

Use Cucumber Tags to define what would you like to run.
Tags can be used as logical expression eg. `"@myTag1 and @myTag2 or @myTag3 and not @myTag4"`

Use command `npm run desktopTags "@myTags"` to run desktop test using Cucumber Tags

## Debugging tests

For WebStorm users:
1. "D debug": "wdio wdio.conf.desktop.ts --inspect --cucumberOpts.tagExpression '@X'",
2. Run specific script by clicking green arrow in line with your command
3. Voilà. Hope you'll find what you're looking for.

> You can find all commands inside `package.json` file.

## Reporting

To generate a report use `npm run generateAllureReport`

> This command generate clean report with your results from `allure-results` folder.

To open this report use `npm run openAllureReport`

> This command starting java server open generated report, type `ctrl+c` in terminal to stop server.

## Debugging Tests

Using VSCode
- Install all node.js extensions (during node installation)
- Debug using VSCode debugging console

Using Webstorm
- run the debug script from WebStorm runner

## Other info

- Project structure

````bash
├───src
├───e2e
│   ├───features
│   ├───pages
│   └───steps
├───utilities
│   ├───page-factory
└───types
````
## Further help

Visit the [WDIO Docs](https://webdriver.io/) to learn more.


