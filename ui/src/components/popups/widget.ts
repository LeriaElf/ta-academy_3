import { Container } from '@Core/container';

export class Widget extends Container {
    public locator = this.page.locator('//section[contains(@class, "eligibilityWidge")]');

    public LOCATORS = {
        title: this.locator.locator('//header[contains(@class, "eligibilityWidge")]/p'),
    };
}
