import { Container } from '@Core/container';

type FormFields = {
    userName: string;
    userLastName: string;
    email: string;
    password: string;
};

export class CreateAcc extends Container {
    private locator = this.page.locator('//div[contains(@class, "loginPopup__wrap")]');

    private LOCATORS = {
        firstName: this.locator.locator('//input[contains(@name,"firstName")]'),
        lastName: this.locator.locator('//input[contains(@name,"lastName")]'),
        email: this.locator.locator('//input[contains(@name,"email")]'),
        password: this.locator.locator('//input[contains(@name,"password")]'),
        createAccBtn: this.locator.locator('//button[contains(@aria-label, "Create new account")]'),
    };
    public async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    }

    public async fillRegisterForm(value: FormFields) {
        await this.LOCATORS.firstName.pressSequentially(value.userName);
        await this.LOCATORS.lastName.pressSequentially(value.userLastName);
        await this.LOCATORS.email.pressSequentially(value.email);
        await this.LOCATORS.password.pressSequentially(value.password);
    }

    public async clickCreateAccBtn() {
        await this.LOCATORS.createAccBtn.click();
    }
}
