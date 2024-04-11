import { InteractivePage } from '../interactivePage.js';
import { Selector } from 'webdriverio';

export default new (class PuppyOrderForm extends InteractivePage {
    protected readonly pageName: string = 'puppy order form page';
    protected readonly locatorsMap: Map<string, Selector> = new Map([
        [this.pageName, '#new_order'], //it the only selector distinguish the page
        ['name input', '#order_name'],
        ['address input', '#order_address'],
        ['email input', '#order_email'],
        ['payment type dropdown', '#order_pay_type'],
        ['Place Order button', 'button.submit'],
    ]);
})();
