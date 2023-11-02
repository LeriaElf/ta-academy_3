import { Component } from '@Core/component';
import { everySeries } from 'p-iteration';

export enum CategoryType {
    Eyeglasses = 'Eyeglasses',
    Sunglasses = 'Sunglasses',
    Multifocal = 'Multifocal',
}

export class CategoryNavigation extends Component {
    private LOCATORS = {
        link: (text: CategoryType) => this.locator.locator(`//a[text()="${text}"]`),
    };

    public async clickLink(category: CategoryType): Promise<void> {
        await Promise.all([
            this.LOCATORS.link(category).click(),
            this.page.waitForLoadState('domcontentloaded'),
        ]);
    }

    private listCategoryLinks: CategoryType[] = [
        CategoryType.Eyeglasses,
        CategoryType.Sunglasses,
        CategoryType.Multifocal,
    ];

    public async isVisibleLinks(): Promise<boolean> {
        return await everySeries(this.listCategoryLinks, async (linkName) =>
            this.LOCATORS.link(linkName).isVisible()
        );
    }
}
