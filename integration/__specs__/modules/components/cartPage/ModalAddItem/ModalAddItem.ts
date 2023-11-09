import { Component } from '@Core/component';
import userEvent from "@testing-library/user-event";

export class ModalAddItem extends Component {
    protected selectors = {
        name: './/input[@data-testid="input-name"]',
        price: './/input[@data-testid="input-price"]',
        quantity: './/input[@data-testid="input-quantity"]',
        createButton: './/button[text()="Create"]'
    };

    public async fillNewCartItem() {
        const [name] = await this.element.waitForXpath(this.selectors.name);
        const [price] = await this.element.waitForXpath(this.selectors.price);
        const [quantity] = await this.element.waitForXpath(this.selectors.quantity);

        userEvent.type(name, 'My first item');
        userEvent.type(price, '25');
        userEvent.clear(quantity);
        userEvent.type(quantity, '2');
    }

    public async clickCreateButton() {
        const [createButton] = await this.element.waitForXpath(this.selectors.createButton);
        userEvent.click(createButton);
    }

}
