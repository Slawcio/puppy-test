export class Waits {

    public static async waitForPageLoad(): Promise<void> {
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 10000,
                timeoutMsg: 'Page has not been loaded'
            }
        );
    }

    public static async waitForElement(element: WebdriverIO.Element){
        await element.waitForExist();
        await element.waitForDisplayed();
        return element;
    }

}