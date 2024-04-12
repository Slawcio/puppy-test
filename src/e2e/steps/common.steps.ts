import { When, Then } from '@wdio/cucumber-framework';
import { ElementActions } from "../../utilities/elementActions.ts";
import { Utils } from '../../utilities/utils.ts';

When('I click {string}', async (selectorName: string) => {
    await ElementActions.clickElement(selectorName);
});

When('I type {string} into {string}', async (text: string, elementName: string) => {
    await ElementActions.setElementText(elementName, text);
});

When('I select {string} from dropdown {string}', async (text: string, elementName: string) => {
    await ElementActions.selectByAttribute(elementName, text);
});

Then('I see {string}', async (selectorName: string) => {
    expect(await ElementActions.getElement(selectorName)).toBeDisplayed();
});

Then('I see element {string} displays text {string}', async (selectorName: string, textToValidate: string) => {
    const element = await ElementActions.getElement(selectorName);
    expect(await element.getText()).toContain(textToValidate);
});

Then('I see elements {string} contains text {string}', async (selectorName, textToValidate) => {
    const elements: WebdriverIO.ElementArray = await ElementActions.getElements(selectorName);
    expect(await Utils.getConcatenatedText(elements)).toContain(textToValidate);
});

Then('Pause {int}', async (timeout: number) => { // fast debug purpose
    await browser.pause(timeout);
});

