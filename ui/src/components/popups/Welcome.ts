import { Container } from '@Core/container';

export class Welcome extends Container {
    public locator = this.page.locator('//div[contains(@class, "rc-dialog-content")]');

    public LOCATORS = {
        title: this.locator.locator('//h2[contains(@class, "welcomePopup__title")]'),
        subTitle: this.locator.locator('//p[contains(@class, "welcomePopup__subtitle")]'),
        closeBtn: this.locator.locator('//button[contains(@class, "rc-dialog-close")]'),
    };
    public async isVisible(): Promise<boolean> {
        await this.locator.waitFor();
        return this.locator.isVisible();
    }

    public async closePopup() {
        await this.LOCATORS.closeBtn.click();
    }
}
