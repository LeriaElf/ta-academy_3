import { Component } from '@Core/component';
import { CategoryNavigation } from '@Components/homePage/homePage/header/bottomSide/categoryNavigation';

export class BottomSide extends Component {
    protected LOCATORS = {
        // logo: this.locator.locator('//a[@aria-label="home page"]'), ---> показать касяк с двумя локаторами
        logo: this.locator.locator(
            '//a[contains(@class, "mainMenu__logo") and @aria-label="home page"]'
        ),
        categoryNavigation: this.locator.locator('//nav[contains(@class, "mainMenu__menu")]'),
    };

    public CategoryNavigation = new CategoryNavigation(this.LOCATORS.categoryNavigation, this.page);
}
