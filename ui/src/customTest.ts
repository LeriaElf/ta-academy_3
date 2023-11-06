import { test as base, expect } from '@playwright/test';
import { HomePage } from '@Components/homePage/homePage';
import { CategoryPage } from '@Components/categoryPage/categoryPage';

import type { Browser, Page } from '@playwright/test';
import { AccessBenefits } from '@Components/popups/AccessBenefits';
import { CreateAcc } from '@Components/popups/CreateAcc';
import { Welcome } from '@Components/popups/Welcome';
import { Widget } from '@Components/popups/Widget';

export type Options = {
    browser: Browser;
    page: Page;
    baseURL: string;
    homePage: HomePage;
    categoryPage: CategoryPage;
    popups: {
        accessBenefits: AccessBenefits;
        createAcc: CreateAcc;
        welcome: Welcome;
        widget: Widget;
    };
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
    popups: async ({ page }, use) => {
        await use({
            accessBenefits: new AccessBenefits(page),
            createAcc: new CreateAcc(page),
            welcome: new Welcome(page),
            widget: new Widget(page),
        });
    },
});

export { test, expect };
