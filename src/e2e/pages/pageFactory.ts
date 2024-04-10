import { browser } from "@wdio/globals";
import { InteractivePage } from "./interactivePage.js";
import puppyDetails from "./interactive-pages/puppyDetails.js";
import puppyList from "./interactive-pages/puppyListing.js";
import puppyAdoptionConfirmation from './interactive-pages/puppyAdoptionConfirmation.js';
import puppyOrderForm from './interactive-pages/puppyOrderForm.js';

export class PageFactory {

    public static async getCurrentPage(): Promise<InteractivePage> {
        const pages = [
            puppyList,
            puppyDetails,
            puppyAdoptionConfirmation,
            puppyOrderForm
        ];

        for (const page of pages) {
            if (await page.isExisting()) {
                return page;
            }
        }

        throw new Error(`Could not find pageObject in PageFactory.ts. URL: ${await browser.getUrl()}`);
    }
}