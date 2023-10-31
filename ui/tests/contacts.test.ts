import { test, expect } from '@Test';

test.describe('check products quantity on Contacts page', () => {
    test('quantity of products should be equal 36', async ({ page, baseURL, homePage }) => {
        await homePage.open();
    });
});
