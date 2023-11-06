import { Mock } from '@Core/mock';
import { CartPage } from '@Components/cartPage/cartPage';

describe('UHC-0-int', () => {
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Check header title', async () => {
        await cartPage.fulfill();
        const title = await cartPage.getHeaderTitle();

        expect(title).toStrictEqual('Shopping cart');

        await cartPage.OpenModalAddItem();
    });
});
