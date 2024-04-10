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
        ['total adoption fee', '.total_cell h2']
    ]);
}