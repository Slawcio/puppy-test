import { InteractivePage } from "../interactivePage.js";
import { Selector } from "webdriverio"

export default new class PuppyDetails extends InteractivePage {

    protected readonly pageName: string = "puppy details page";
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName,'#content p'], //it the only selector distinguish the page
        ['puppy details content','#content p'],
        ['return to list button', '//*[contains(text(), "Return to List")]'],
        ['adoption fee', '.fees'],
        ['Adopt Me! button','[value="Adopt Me!"]'],
    ]);
}