import { InteractivePage } from "../interactivePage.js";
import { Selector } from "webdriverio"

export default new class Puppy extends InteractivePage {

    protected readonly pageName: string = "puppy details";
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName,'#content p'], //it the only selector distinguish the page
        ['puppy details','#content p'],
        ['return to list', '//*[contains(text(), "Return to List")]'],
        ['adoption fee', '.fees'],
        ['Adopt Me! button','[value="Adopt Me!"]'],
    ]);
}