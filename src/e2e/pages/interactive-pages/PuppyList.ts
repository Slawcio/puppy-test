import { InteractivePage } from "../InteractivePage.js";
import { Selector } from "webdriverio"

export default new class PuppyList extends InteractivePage {

    protected pageName: string = "puppy list";
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName,'//h2[contains(text(), "Puppy List")]'],
        ['view details for the puppy named hanna', '//*[contains(text(),"Hanna")]/parent::*//following-sibling::*[@class="view"]'],
        ['the puppy named Maggie May', '//*[contains(text(),"Maggie Mae")]'],
        ['current page number', '.current'],
        ['puppies names on list', '.name']
    ]);
}