import { Component } from '@Core/component';
import { waitFor } from '@Utils/waitFor';
import { GridItem } from '@Components/categoryPage/categoryPage/grid/gridItem';

import type { Locator } from '@playwright/test';

export class Grid extends Component {
    private LOCATORS = {
        items: this.locator.locator('//div[contains(@class, "categoryItem__container")]'),
    };

    private async getItemLocatorsList(itemLocator: Locator): Promise<Locator[]> {
        const locatorsList = await waitFor(() => itemLocator.all(), {
            timeout: 60000,
        });

        return locatorsList;
    }

    public async getItems(): Promise<GridItem[]> {
        const locatorsList = await this.getItemLocatorsList(this.LOCATORS.items);

        return locatorsList.map((item: Locator) => new GridItem(item, this.page));
    }
}
