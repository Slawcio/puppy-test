import { PageFactory } from "../e2e/pages/PageFactory.js";
import { InteractivePage } from '../e2e/pages/InteractivePage.js';
import { Waits } from './Waits.js';

export class ElementActions {

    public static async getElement(selectorName: string): Promise<WebdriverIO.Element>{
        let currentPage: InteractivePage = await PageFactory.getCurrentPage();
        const resultElement: WebdriverIO.Element = await currentPage.getElement(selectorName);
        if(resultElement){
            return await Waits.waitForElement(resultElement);
        }
        else
            throw new Error(`On Page: '${currentPage.getPageName()}' could find element: '${selectorName}' in locatorsMap`);
    }

    public static async getElements(selectorName: string): Promise<Array<WebdriverIO.Element>>{
        let currentPage: InteractivePage = await PageFactory.getCurrentPage();
        const resultElements: Array<WebdriverIO.Element> = await currentPage.getElements(selectorName);
        for(let element: WebdriverIO.Element of resultElements){
            await Waits.waitForElement(element);
        }
        return resultElements;
    }

    public static async clickElement(selectorName: string) {
        const element: WebdriverIO.Element = await ElementActions.getElement(selectorName);
        await element.scrollIntoView({ block: 'center', inline: 'center' });
        await element.waitForClickable();
        await element.click();
    }

}