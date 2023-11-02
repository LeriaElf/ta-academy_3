import { Component } from '@Core/component';

export class GridItem extends Component {
    private LOCATORS = {
        image: this.locator.locator('//a[contains(@class, "mainImage")]'),
    };

    public async click(): Promise<void> {
        await Promise.all([
            this.LOCATORS.image.click(),
            this.page.waitForLoadState('domcontentloaded'),
        ]);
    }
}
