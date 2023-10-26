// Функция для нахождения суммы элементов массива
export const arraySum = (arr: number[]) => {
    return arr.reduce((acc, current) => acc + current, 0);
}

// Функция для фильтрации элементов массива по условию
export const arrayFilter = (arr: number[], condition: (item: number) => boolean): number[] => {
    return arr.filter(item => condition(item));
}

export type UserType = {
    name: string;
    surname?: string;
    age: number | string;
}

// Функция для преобразования элементов массива
export const getUserNames = (arr: UserType[]): string[] => {
    return  arr.map(item => item.name);
}