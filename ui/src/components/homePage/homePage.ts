import { Container } from '@Core/container';
import { Header } from '@Components/homePage/homePage/header';

export class HomePage extends Container {
    public LOCATORS = {
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),
        widget: this.page.locator('//header[contains(@class, "eligibilityWidget")]/p'),
    };

    public Header = new Header(this.LOCATORS.header, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
