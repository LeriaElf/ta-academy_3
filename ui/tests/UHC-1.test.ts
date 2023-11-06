import { test, expect } from '@Test';
import { generateRandomMail } from '@Utils/random';

test.describe('UHC-1', () => {
    test('Registration new customer with valid data and checking user data reset after logout', async ({
        browser,
        page,
        baseURL,
    }) => {
        await page.goto(baseURL as string, { waitUntil: 'domcontentloaded' });

        const pageTitle = await page.title();

        expect(pageTitle).toStrictEqual('UHC. United Healthcare.');

        const myAccount = page.locator('//div[contains(@class, "myAccount__myAccountMenu")]');
        await myAccount.hover();

        const accMenu = page.locator(
            '//div[contains(@class, "myAccount__myAccountMenu")]//div[contains(@class, "topStripMenuDropdown__dropdownContent")]'
        );
        await accMenu.waitFor();
        expect(await accMenu.isVisible()).toBe(true);

        const logInBtn = page.locator('//button[contains(., "Log in")]');
        await logInBtn.click();

        const popUpBenefits = page.locator('//div[contains(@class, "ReactModal__Content")]');
        await expect(popUpBenefits).toBeVisible();

        const createAccBtn = page.locator('//button[contains(., "Create UHCGlasses")]');
        await createAccBtn.click();
        await expect(page.locator('//div[contains(@class, "loginPopup__wrap")]')).toBeVisible({
            timeout: 1000,
        });

        const userName = 'Ivan';
        const email = generateRandomMail();

        await page.locator('//input[contains(@name,"firstName")]').pressSequentially(userName);
        await page.locator('//input[contains(@name,"lastName")]').pressSequentially('Ivanov');
        await page.locator('//input[contains(@name,"email")]').pressSequentially(email);
        await page.locator('//input[contains(@name,"password")]').pressSequentially('Test1234');

        const createBtn = page.locator('//button[contains(@aria-label, "Create new account")]');
        await createBtn.click();

        const welcomePopUpTitle = page.locator('//h2[contains(@class, "welcomePopup__title")]');
        await welcomePopUpTitle.waitFor();
        await welcomePopUpTitle.isVisible();

        await expect(welcomePopUpTitle).toHaveText(`Welcome, ${userName}`);
        await expect(page.locator('//p[contains(@class, "welcomePopup__subtitle")]')).toContainText(
            'You can start enjoying everything we have to offer'
        );

        await page.locator('//button[contains(@class, "rc-dialog-close")]').click();

        expect(await page.locator('//div[contains(@class, "rc-dialog-body")]').isVisible()).toBe(
            false
        );
        await expect(page.locator('//div[contains(@class, "myAccount__title")]')).toHaveText(
            `Hello, ${userName} `
        );
        await expect(page.locator('//header[contains(@class, "eligibilityWidget")]/p')).toHaveText(
            `Hi ${userName}`
        );

        await myAccount.hover();

        expect(
            await accMenu.isVisible()
        ).toBe(true);

        const logOutBtn = page.locator('//button[contains(., "Sign out")]');
        await logOutBtn.click();

        await expect(page.locator('//div[contains(@class, "myAccount__title")]')).toHaveText(
            'My Account'
        );
        expect(await page.locator('//div[contains(@class, "eligibilityWidget")]').isVisible()).toBe(
            false
        );
    });
});
