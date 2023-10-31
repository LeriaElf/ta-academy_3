import { Container } from '@Core/container';

export class HomePage extends Container {
    protected LOCATORS = {
    };

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
