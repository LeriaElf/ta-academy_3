import { Component } from '@Core/component';

export class MyAccMenu extends Component {
    protected LOCATORS = {
        loginBtn: this.locator.locator('//button[contains(., "Log in")]'),
        signoutBtn: this.locator.locator('//button[contains(., "Sign out")]'),
    };

    public async clickLogIn() {
        await this.LOCATORS.loginBtn.click();
    }

    public async clickSignoutBtn() {
        await this.LOCATORS.signoutBtn.click();
    }
}
