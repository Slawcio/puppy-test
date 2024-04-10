import { browser } from "@wdio/globals";
import { InteractivePage } from "./InteractivePage.js";
import puppyDetails from "./interactive-pages/PuppyDetails.js";
import puppyList from "./interactive-pages/PuppyList.js";
import adoptionConfirmation from './interactive-pages/AdoptionConfirmation.js';

export class PageFactory {

    public static async getCurrentPage(): Promise<InteractivePage> {
        if(await puppyList.isExisting())
            return puppyList;
        if(await puppyDetails.isExisting())
            return puppyDetails;
        if(await adoptionConfirmation.isExisting())
            return adoptionConfirmation;
         else {
            throw new Error(`Could find pageObject in PageFactory.ts. URL: ${await browser.getUrl()}`)
        }
    }
}