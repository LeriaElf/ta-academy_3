import { Component } from '@Core/component';
import userEvent from "@testing-library/user-event";

export class CartItem extends Component {
    protected selectors = {
        cartItemName: '//h2[contains(@class, "cart-item__name")]',
        fullPrice: './/div[contains(@class, "fullprice")]',
        priceForOne: './/div[contains(@class, "price-for-one")]',
        addButton: './/button[text()="+"]',
        deleteButton: '//button[(@data-testid="delete-btn")]',
        quantity: './/div[(@data-testid="quantity-current")]'
    };

    public async getPriceForAll(): Promise<number> {
        const [priceElement] = await this.element.waitForXpath(this.selectors.fullPrice);
        return Number(priceElement.textContent.replace('$', ''));
    }

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.addButton);
    }

    public async getSummary() {
        const cartItemName = await this.element.waitForXpath(this.selectors.cartItemName);
        const quantity = await this.element.waitForXpath(this.selectors.quantity);
        const fullPrice = await this.element.waitForXpath(this.selectors.fullPrice);
        const priceForOne = await this.element.waitForXpath(this.selectors.priceForOne);

        return {
            cartItemName: cartItemName.at(0).textContent,
            fullPrice: parseFloat(fullPrice.at(0).textContent.replace('$', '')),
            priceForOne: parseFloat(priceForOne.at(0).textContent.replace('$', '')),
            quantity: parseFloat(quantity.at(0).textContent)
        };
    }

    public async deleteItem() {
        const deleteButton = await this.element.waitForXpath(this.selectors.deleteButton);
        userEvent.click(deleteButton.at(0));
    }


}
