import { Container } from '@Core/container';

export class AccessBenefits extends Container {
    private locator = this.page.locator('//div[contains(@class, "ReactModal__Content")]');

    private LOCATORS = {
        createAccBtn: this.locator.locator('//button[contains(., "Create UHCGlasses")]'),
    };
    public async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    }

    public async clickCreateAccBtn() {
        await this.LOCATORS.createAccBtn.click();
    }
}
