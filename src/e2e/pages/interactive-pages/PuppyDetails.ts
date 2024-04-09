import { InteractivePage } from "../InteractivePage.js";
import { Selector } from "webdriverio"

export default new class Puppy extends InteractivePage {

    protected pageName: string = "PUPPY DETAILS";
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName,'#content p'], //it the only selector distinguish the page
        ['puppy details','#content p'],
        ['return to list', '//*[contains(text(), "Return to List")]']
    ]);
}