import {Mock} from "@Core/mock";
import {CartPage} from "@Components/cartPage/cartPage";
import {GetCartItemsMock} from "@Mocks/api/mockio/v2/id/get";

describe('UHC-1-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    })

    test('Add-Delete cart items', async () => {
        await cartPage.fulfill();
        // const title = await cartPage.getHeaderTitle();
        const modalItem = await cartPage.OpenModalAddItem();

        reporter.startStep('Click Add Cart Item button, check ‘Add New Cart Item’ modal is displayed');
        await cartPage.OpenModalAddItem(); //??
        expect(await cartPage.isModalAddItemVisible()).toBe(true);
        reporter.endStep();

        reporter.startStep('Fill card fields, check a new product has been added');
        await modalItem.fillNewCartItem();
        await modalItem.clickCreateButton();
        expect(await cartPage.isModalAddItemVisible()).toBe(false);

        const cartList = await cartPage.getCartList();
        const cartItems = await cartList.getCartItems()

        const firstItemSummary = await cartItems.at(0).getSummary();
        const quantity = firstItemSummary.quantity;
        const cartItemName = firstItemSummary.cartItemName;
        const fullPrice = firstItemSummary.fullPrice;
        const priceForOne = firstItemSummary.priceForOne;

        expect(cartItemName).toEqual('My first item');
        expect(quantity).toEqual(2);
        if (quantity === 1) {
            expect(fullPrice).toEqual(25);
        } else {
            expect(priceForOne).toEqual(25)
        }
        reporter.endStep();

        reporter.startStep('Delete last added item, check that it is not on the page');
        expect(await cartList.getCartItems()).toHaveLength(3);

        const firstItem = (await cartList.getCartItems()).at(0);
        await firstItem.deleteItem();
        expect(await cartList.getCartItems()).toHaveLength(2);

        const updatedCartItems = await cartList.getCartItems();

        for(const item of updatedCartItems) {
            const itemSummary = await item.getSummary();
            expect(itemSummary.cartItemName).not.toEqual('My first item');
        }
    })
})