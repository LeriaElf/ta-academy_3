import { Component } from '@Core/component';
import { MyAccBtn } from '@Components/homePage/homePage/header/topSide/myAccBtn';

export class TopSide extends Component {
    public LOCATORS = {
        myAccBtn: this.locator.locator('//div[contains(@class, "myAccount__myAccountMenu")]'),
        signedInBtn: this.locator.locator('//div[contains(@class, "myAccount__title")]'),
    };
    public MyAccBth = new MyAccBtn(this.LOCATORS.myAccBtn, this.page);
}
