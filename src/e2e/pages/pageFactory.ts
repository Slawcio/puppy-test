import { browser } from "@wdio/globals";
import { InteractivePage } from "./interactivePage.ts";
import puppyDetails from "./interactive-pages/puppyDetails.ts";
import puppyList from './interactive-pages/puppyListing.ts';
import puppyAdoptionConfirmation from './interactive-pages/puppyAdoptionConfirmation.ts';
import puppyOrderForm from './interactive-pages/puppyOrderForm.ts';

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