import { Mock } from '@Core/mock';
import { CartPage } from '@Components/cartPage/cartPage';
import { GetCartItemsMock } from '@Mocks/api/mockio/v2/id/get';

describe('UHC-0-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Test title', async () => {
        await cartPage.fulfill();
        const title = await cartPage.getHeaderTitle();

        reporter.startStep('This is test step reporter');
            expect(title).toStrictEqual('Shopping cart');
        reporter.endStep();
    });
});
