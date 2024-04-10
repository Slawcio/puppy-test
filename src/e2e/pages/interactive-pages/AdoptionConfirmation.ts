import { InteractivePage } from '../InteractivePage.ts';
import { Selector } from 'webdriverio';

export default new class AdoptionConfirmation extends InteractivePage {
    protected readonly pageName: string = 'adoption confirmation page';
    protected readonly locatorsMap: Map<string, Selector> = new Map<string, Selector>([
        [this.pageName,'//*[contains(text(),"Your Litter")]'],
        ['Change Your Mind button','[value="Change your mind"]']
    ]);
}