# Puppy Desktop Test Framework

## Tests definition and author commentary:

1. View details for the puppy Hanna, return to the puppy list
2. Verify that the puppy Maggie May is on the first page
3. Verify that the puppy Tipsy is on the second page
4. View the details for Twinky, and verify that their adoption fee is $22.50
5. View the details for Spud, click the Adopt Me! button, and then click the change your mind button
6. View the details for Hanna, click the Adopt Me! button, click the Adopt Another Puppy button, and adopt Maggie Mae.
7. Complete the adoption with credit card, and verify the adoption has been completed
8. Adopt Brook and add a travel carrier, and verify that the total amount has increased by the price of the carrier
9. Adopt Brook and Maggie Mae. Add a first vet visit and a collar and leash for Brook, and add a travel carrier for Maggie Mae. Complete the adoption with a credit card, and verify the adoption has been completed

#### General outcomes
- https://spartantest-puppies.herokuapp.com/ should be equipped with aut-id. Most pages do not have them at at all.
- 8th point - spartantest page above has an error. addons are not calculated to fee the total price. Test step is failing as it should then.

    
## Description
This project implements a unique Page Factory architecture, enhancing the standard Page Object Model (POM) framework for large-scale web automation projects. The project focuses on reducing boilerplate code and improving maintainability and scalability. Serving as a proof of concept, it currently has some vulnerabilities regarding the lack of automatic advice argument to step from IDE which is helpful sometimes for newcomers. Once these are resolved, it has the potential to become a powerful design solution for projects with a large number of pages.

## Key Features
- Page Factory Architecture: Dynamically manages page objects, allowing for scalable and maintainable code structure.
- Enhanced Step Definitions: Utilizes common steps (I click {string}, I see {string}, etc.) integrated with a central ElementActions class for efficient element interactions.
- Modular Design: Each page is represented by a distinct class derived from an InteractivePage base, facilitating easier updates and feature additions.
- Locator Management: Implements an abstract locatorsMap in each page class, streamlining element selectors' management and usage.

## Preparation

- Install Node.js with all extension
- Install firefox and chrome
- Java must be installed to run allure reports

Run `npm ci` to install all dependencies.

> You can use `npm install` as well.

## Configuring Environment

The environment is predefined in baseUrl in wdio.conf.ts

## Running tests

Use Cucumber Tags to define what would you like to run.
Tags can be used as logical expressions eg. `"@myTag1 and @myTag2 or @myTag3 and not @myTag4"`

Use the command `npm run desktopTags "@puppy"` to run all desktop tests using Cucumber Tags

Use the command `npm run desktopTags "@sX"` to run specific scenario from 1-9 eg `@s5`

## Debugging tests

option for WebStorm users:
1. "D debug": "wdio wdio.conf.desktop.ts --inspect --cucumberOpts.tagExpression '@X'",
2. Run specific script by clicking green arrow in line with your command
3. Voilà. Hope you'll find what you're looking for.

> You can find all commands inside `package.json` file.

## Reporting

To generate a report use `npm run generateAllureReport`

> This command generate clean report with your results from `allure-results` folder.

To open this report use `npm run openAllureReport`

> This command starting java server open generated report, type `ctrl+c` in terminal to stop server.

## Other info

- Project structure

````bash
├───src
│   ├───e2e
│   │   ├───features
│   │   ├───pages
│   │   │   ├───interactive-pages
│   │   └───steps
│   ├───utilities
└───types
````
## Further help

Visit the [WDIO Docs](https://webdriver.io/) to learn more.


