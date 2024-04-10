import { InteractivePage } from "../InteractivePage.js";
import { Selector } from "webdriverio"
import { Utils } from '../../../utilities/Utils.js';
import { ElementActions } from '../../../utilities/ElementActions.js';

export default new class PuppyList extends InteractivePage {

    protected pageName: string = "puppy list";
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName,'//h2[contains(text(), "Puppy List")]'],
        ['view details for the puppy named Hanna', '//*[contains(text(),"Hanna")]/parent::*//following-sibling::*[@class="view"]'],
        ['view details for the puppy named Twinkie','//*[contains(text(),"Twinkie")]/parent::*//following-sibling::*[@class="view"]'],
        ['the puppy named Maggie May', '//*[contains(text(),"Maggie Mae")]'],
        ['current page number', '.current'],
        ['puppies names on list', '.name'],
        ['the second page','[aria-label="Page 2"]'],
        ['next page button','.next_page:not(.disabled)']
    ]);

    public async navigateThroughPaginationUntilFindingText(text, maxPages: number){
        for(let i = 0; i < maxPages; i++){
            if((await Utils.getConcatenatedText(await ElementActions.getElements("puppies names on list"))).includes(text)){
                return true;
            } else {
                try{
                    await ElementActions.clickElement("next page button");
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