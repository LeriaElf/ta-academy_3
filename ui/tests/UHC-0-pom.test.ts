import { expect, test } from '@Test';
import { CategoryUri } from '@Components/categoryPage/categoryPage';

test.describe('UHC-0-pom', () => {
    test('The title of test will be here...', async ({ page, homePage, categoryPage }) => {
        await test.step('Preconditions steps | e.g. Open Home page and do registration', async () => {
            await homePage.open();

            await page.locator('//div[text()="My Account"]/../..').hover();
            await page.locator('//button[text()="Log in"]').click();
            await page.locator('//span[text()="Create UHCGlasses.com Account"]').click();
            await page.getByPlaceholder('First Name').click();
            await page.getByPlaceholder('First Name').fill('Ivan');
            await page.getByPlaceholder('Last Name').fill('Ivanov');
            await page.getByPlaceholder('Email').fill(`test@test${Date.now()}.com`);
            await page.getByPlaceholder('Password').fill('Test');
            await page.getByPlaceholder('Password').fill('Aa123445');
            await page.getByLabel('Create new account').click();
            await page.locator('//button[@aria-label="Close"]').click();
            await expect(page.locator('//div[@class="rc-dialog-content"]')).toBeHidden();
        });

        await test.step('Test-step 1-3 | Step description', async () => {
            const navigation = homePage.Header.BottomSide.CategoryNavigation;
            expect(await navigation.isVisibleLinks()).toBe(true);

            await categoryPage.open(CategoryUri.Eyeglasses);

            const [product] = await categoryPage.Grid.getItems();
            await product.click();
        });
    });
});
