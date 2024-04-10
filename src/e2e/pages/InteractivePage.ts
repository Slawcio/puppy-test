import { $, $$ } from "@wdio/globals";
import { Selector } from 'webdriverio';
import { Waits } from '../../utilities/Waits.js';

export abstract class InteractivePage {

    protected abstract readonly pageName: string | undefined;
    protected abstract readonly locatorsMap: Map<string, Selector> | undefined;

    public getPageName() {
        return this.pageName;
    }

    public async isExisting(): Promise<boolean> {
        await Waits.waitForPageLoad();

        if (this.pageName) {
            const selector: Selector | undefined = this.getSelector(this.pageName);
            if (selector !== undefined) {
                const element: WebdriverIO.Element = await $(selector);
                return await element.isExisting();
            }
        }
        throw new Error(`Page name is undefined.`);
    }

    public async getElement(selectorName: string): Promise<WebdriverIO.Element> {
        const selector: Selector = await this.getSelector(selectorName);
        return $(selector);
    }

    public async getElements(selectorName: string): Promise<Array<WebdriverIO.Element>>{
        const selector: Selector = await this.getSelector(selectorName);
        return $$(selector);
    }

    private getSelector(selectorName: string): Selector {
        if (!this.locatorsMap) {
            throw new Error("Locators map is undefined.");
        }

        const selector: Selector | undefined = this.locatorsMap.get(selectorName);
        if (!selector) {
            throw new Error(`Selector not found for: ${selectorName}`);
        }
        return selector;
    }

    public async open(path: string): Promise<void> {
        await browser.url(path);
    }
}
