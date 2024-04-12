import {type InteractivePage} from '../e2e/pages/interactivePage.ts';
import { PageFactory } from '../e2e/pages/pageFactory.ts';
import { Waits } from './waits.ts';

export class ElementActions {

	public static async getElement(selectorName: string): Promise<WebdriverIO.Element> {
		const currentPage: InteractivePage = await PageFactory.getCurrentPage();
		const resultElement: WebdriverIO.Element = await currentPage.getElement(selectorName);
		if (resultElement) {
			return Waits.waitForElement(resultElement);
		} else
			throw new Error(`On Page: '${currentPage.getPageName()}' could find element: '${selectorName}' in locatorsMap`);
	}

	public static async getElements(selectorName: string): Promise<WebdriverIO.ElementArray> {
		const currentPage: InteractivePage = await PageFactory.getCurrentPage();
		const resultElements: WebdriverIO.ElementArray = await currentPage.getElements(selectorName);
		// @ts-ignore
		for (const element: WebdriverIO.Element of resultElements) {
			await Waits.waitForElement(element);
		}
		return resultElements;
	}

	public static async clickElement(selectorName: string) {
		const element: WebdriverIO.Element = await ElementActions.getElement(selectorName);
		await element.scrollIntoView({block: 'center', inline: 'center'});
		await element.waitForClickable();
		await element.click();
	}

	public static async setElementText(selectorName: string, text: string) {
		const element: WebdriverIO.Element = await ElementActions.getElement(selectorName);
		await element.setValue(text);
	}

    static async selectByAttribute(elementName: string, text: string) {
        const element: WebdriverIO.Element = await ElementActions.getElement(elementName);
		await element.selectByVisibleText(text);
    }
}