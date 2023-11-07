import { MockObject } from '@Mocks/mockObject';

export class GetCartItemsMock extends MockObject {
    public constructor() {
        super();
        this.path = {
            url: 'https://mocki.io/v1/a92eda42-69d0-43c5-bc66-cd56e4b8c906',
            method: 'get',
        };
    }

    public getFixture(): Record<string, unknown>[] {
        return [
            {
                id: 1,
                name: 'Boots',
                price: 150,
                quantity: 2,
            },
            {
                id: 2,
                name: 'Gloves',
                price: 20,
                quantity: 4,
            },
        ];
    }
}
