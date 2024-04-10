import { InteractivePage } from "../InteractivePage.js";
import { Selector } from "webdriverio"
import { Utils } from '../../../utilities/Utils.js';
import { ElementActions } from '../../../utilities/ElementActions.js';

export default new class PuppyList extends InteractivePage {

    protected readonly pageName: string = "puppy list page";
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName,'//h2[contains(text(), "Puppy List")]'],
        ['view details button for the puppy called Hanna', PuppyList.geViewDetailsSelectorFor('Hanna')],
        ['view details button for the puppy called Twinkie', PuppyList.geViewDetailsSelectorFor('Twinkie')],
        ['view details button for the puppy called Spud', PuppyList.geViewDetailsSelectorFor('Spud')],
        ['the puppy named Maggie May', '//*[contains(text(),"Maggie Mae")]'],
        ['current page number', '.current'],
        ['puppies names on list', '.name'],
        ['second page pagination number','[aria-label="Page 2"]'],
        ['next page pagination button','.next_page:not(.disabled)']
    ]);

    private static geViewDetailsSelectorFor(puppyName: string): string{
        return `//*[contains(text(),"${puppyName}")]/parent::*//following-sibling::*[@class="view"]`
    }

    public async navigateThroughPaginationUntilFindingText(text, maxPages: number){
        for(let i = 0; i < maxPages; i++){
            if((await Utils.getConcatenatedText(await ElementActions.getElements("puppies names on list"))).includes(text)){
                return true;
            } else {
                try{
                    await ElementActions.clickElement("next page pagination button");
                } catch (err) {
                    console.error(`Text ${text} couldn't be found ` + err);
                    return false;
                }
            }
        }
        console.error(`Text ${text} couldn't be found after ${maxPages} attempts`);
        return false;
    }
}