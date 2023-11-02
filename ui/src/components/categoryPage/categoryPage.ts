import { Container } from '@Core/container';
import { Grid } from '@Components/categoryPage/categoryPage/grid';

export enum CategoryUri {
    Eyeglasses = '/eyeglasses-collection',
    Sunglasses = '/prescription-sunglasses',
    Multifocal = '/progressive-lenses',
}

export class CategoryPage extends Container {
    private LOCATORS = {
        grid: this.page.locator('//div[contains(@class, "category__productContainer")]'),
    };

    public Grid = new Grid(this.LOCATORS.grid, this.page);

    public async open(url: CategoryUri = CategoryUri.Eyeglasses): Promise<void> {
        await Promise.all([
            this.page.goto(url),
            this.page.waitForURL(url),
            this.page.waitForLoadState('load'),
        ]);
    }
}
