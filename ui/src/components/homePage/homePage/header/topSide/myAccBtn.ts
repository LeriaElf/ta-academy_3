import { Component } from '@Core/component';
import { MyAccMenu } from './myAccBtn/myAccMenu';

export class MyAccBtn extends Component {
    private LOCATORS = {
        accMenu: this.locator.locator(
            '//div[contains(@class, "topStripMenuDropdown__dropdownContent")]'
        ),
    };
    public async open() {
        await this.locator.hover();
        await this.locator.waitFor();
        await this.LOCATORS.accMenu.isVisible();
    }

    public AccMenu = new MyAccMenu(this.LOCATORS.accMenu, this.page);
}
