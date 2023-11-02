import { test as base, expect } from '@playwright/test';
import { HomePage } from '@Components/homePage/homePage';
import { CategoryPage } from '@Components/categoryPage/categoryPage';

import type { Browser, Page } from '@playwright/test';

export type Options = {
    browser: Browser;
    page: Page;
    baseURL: string;
    homePage: HomePage;
    categoryPage: CategoryPage;
};

const test = base.extend<Options>({
    page: async ({ page, context, baseURL }, use) => {
        await context.addCookies([
            {
                name: 'OptanonAlertBoxClosed',
                value: new Date().toISOString(),
                url: baseURL,
            },
        ]);
        await use(page);
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    categoryPage: async ({ page }, use) => {
        await use(new CategoryPage(page));
    },
});

export { test, expect };
