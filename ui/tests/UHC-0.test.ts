import { test, expect } from '@Test';

test.describe('UHC-0 (test ID)', () => {
    test('Check search results on category page (test title)', async ({ browser, page, baseURL  }) => {
        await page.goto(baseURL as string, {waitUntil: 'domcontentloaded'});

        const pageTitle = await page.title();

        expect(pageTitle).toStrictEqual('UHC. United Healthcare.');

        const inputSearch = page.locator('//input[@aria-label="Search"]');
        await inputSearch.type('ray ban');

        // await page.locator('//ul[contains(@class, "searchResults__list")]').waitFor();
        // expect(await page.locator('//ul[contains(@class, "searchResults__list")]').isVisible()).toBe(true);

        const inputSearchButton = page.locator('//button[@aria-label="Submit Search"]');
        await inputSearchButton.click();

        const subtitleSearchResultLocator = page.locator('//p[contains(., "Search results for:")]');
        const subtitleSearchResultText = await subtitleSearchResultLocator.textContent();

        expect(subtitleSearchResultText).toStrictEqual('Search results for: ray ban');
    });
});
