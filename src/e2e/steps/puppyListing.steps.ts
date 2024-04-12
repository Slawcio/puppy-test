import { Given, When } from '@wdio/cucumber-framework';
import puppyList from '../pages/interactive-pages/puppyListing.ts';

Given('I am on puppy list page', async () => {
    await puppyList.open('/'); // could be parametrized in Common.steps if necessary
});

When('I navigate through the pages to find {string} for max {int} pages', async (text: string, maxPages: number) => {
    expect(await puppyList.navigateThroughPaginationUntilFindingText(text, maxPages)).toBeTruthy();
})