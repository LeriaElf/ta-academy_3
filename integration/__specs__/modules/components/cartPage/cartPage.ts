import { fireEvent } from '@testing-library/react';
import { Container } from '@Core/container';
import { CartList } from '@Components/cartPage/cartList/cartList';
import { ModalAddItem } from '@Components/cartPage/ModalAddItem/ModalAddItem';

export class CartPage extends Container {
    private selectors = {
        title: 'h1',
        cartList: './/div[@class="cart__list"]',
        buttonAddCartItem: './/button[text()="Add Cart Item"]',
        modalAddItem: './/div[@data-testid="modal-inside"]',
    };

    public async fulfill(): Promise<void> {
        await super.fulfill();
    }

    public async getHeaderTitle(): Promise<string> {
        const [title] = await document.waitForQuerySelector(this.selectors.title);
        return title.textContent;
    }

    public async getCartList(): Promise<CartList> {
        const [cartListElement] = await document.waitForXpath(this.selectors.cartList);
        return new CartList(cartListElement);
    }

    public async OpenModalAddItem(): Promise<ModalAddItem> {
        const [button] = await document.waitForXpath(this.selectors.buttonAddCartItem);
        fireEvent.click(button);

        const [modal] = await document.waitForXpath(this.selectors.modalAddItem);

        return new ModalAddItem(modal);
    }
}
