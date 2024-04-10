import { When, Then } from '@wdio/cucumber-framework';
import { ElementActions } from "../../utilities/ElementActions.js";
import { Utils } from '../../utilities/Utils.js';

When('I click {string}', async (selectorName: string) => {
    await ElementActions.clickElement(selectorName);
});

Then('I see {string}', async (selectorName: string) => {
    expect(await ElementActions.getElement(selectorName)).toBeDisplayed();
});

Then('I see element {string} displays text {string}', async (selectorName: string, textToValidate: string) => {
    const element = await ElementActions.getElement(selectorName);
    expect(await element.getText()).toContain(textToValidate);
});

Then('I see elements {string} contains text {string}', async (selectorName, textToValidate) => {
    const elements: Array<WebdriverIO.Element> = await ElementActions.getElements(selectorName);
    expect(await Utils.getConcatenatedText(elements)).toContain(textToValidate);
});

Then('Pause {int}', async (timeout: number) => { // fast debug purpose
    await browser.pause(timeout);
});

