import { expect, test } from '@Test';
import { generateRandomMail } from '@Utils/random';

test.describe('UHC-1-pom', () => {
    test('Autorization..', async ({ page, homePage, popups }) => {
        const inputValues = {
            userName: 'Ivan',
            userLastName: 'Ivanov',
            email: generateRandomMail(),
            password: '1234Qwer',
        };

        await test.step(' Preconditions: Open Home page', async () => {
            await homePage.open();

            expect(await page.title()).toStrictEqual('UHC. United Healthcare.');
        });

        await test.step('test step 1-2: click on ‘Log In’ button and create acc button', async () => {
            await homePage.Header.TopSide.MyAccBth.open();

            await homePage.Header.TopSide.MyAccBth.AccMenu.clickLogIn();

            await popups.accessBenefits.isVisible();

            await popups.accessBenefits.clickCreateAccBtn();

            await popups.createAcc.isVisible();
        });

        await test.step('test step 3: Fill out form and click Create button', async () => {
            await popups.createAcc.fillRegisterForm(inputValues);

            await popups.createAcc.clickCreateAccBtn();

            await popups.welcome.isVisible();

            await expect(popups.welcome.LOCATORS.title).toHaveText(
                `Welcome, ${inputValues.userName}`
            );
            await expect(popups.welcome.LOCATORS.subTitle).toContainText(
                'You can start enjoying everything we have to offer'
            );
        });

        await test.step('test step 4: Click on Close and check authorisation', async () => {
            await popups.welcome.closePopup();
            await expect(popups.welcome.locator).not.toBeVisible();

            await expect(homePage.Header.TopSide.LOCATORS.signedInBtn).toHaveText(
                `Hello, ${inputValues.userName} `
            );
            await expect(popups.widget.LOCATORS.title).toHaveText(`Hi ${inputValues.userName}`);
        });

        await test.step('test step 5: sign out', async () => {
            await homePage.Header.TopSide.MyAccBth.open();
            await homePage.Header.TopSide.MyAccBth.AccMenu.clickSignoutBtn();

            await expect(homePage.Header.TopSide.LOCATORS.signedInBtn).toHaveText('My Account');
            await expect(popups.widget.locator).not.toBeVisible();
        });
    });
});
