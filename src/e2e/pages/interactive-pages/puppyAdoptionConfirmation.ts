import { InteractivePage } from '../interactivePage.js';
import { Selector } from 'webdriverio';

export default new class PuppyAdoptionConfirmation extends InteractivePage {
    protected readonly pageName: string = 'adoption confirmation page';
    protected readonly locatorsMap: Map<string, Selector> = new Map<string, Selector>([
        [this.pageName,'//*[contains(text(),"Your Litter")]'],
        ['Change Your Mind button','[value="Change your mind"]'],
        ['Adopt Another Puppy button', '[value="Adopt Another Puppy"]'],
        ['Complete the Adoption button', '[value="Complete the Adoption"]'],
        ['adoption summary puppy names', 'tr:not(.total_line) td:nth-child(2) h2'],
        ['travel carrier checkbox','#carrier'],
        ['first vet visit for Brook checkbox', ''],
        ['total adoption fee', '.total_cell h2'],
        ['first vet visit for Brook checkbox','//*[contains(text(),"Brook")]/parent::*/parent::*/following-sibling::*[5]//input'],
        ['collar and leash for Brook checkbox','//*[contains(text(),"Brook")]/parent::*/parent::*/following-sibling::*[2]//input'],
        ['travel carrier for Maggie Mae checkbox','//*[contains(text(),"Maggie Mae")]/parent::*/parent::*/following-sibling::*[4]//input']
    ]);
}