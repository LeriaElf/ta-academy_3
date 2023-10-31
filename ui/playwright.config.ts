import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    /* Maximum time one test can run for. */
    timeout: 120 * 1000,
    expect: {
        timeout: 5000,
    },
    /* Run tests in files in parallel */
    fullyParallel: false,

    retries: 0,
    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html'], ['list']],

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://uvp-0000-uhc-desktop.gusadev.com/',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        ignoreHTTPSErrors: true,
        launchOptions: {
            devtools: true,
            args: ['--start-maximized'],
        },
    },
    outputDir: 'test-results/',
});
