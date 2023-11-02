export function generateRandomMail(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let domain = '';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        domain += characters.charAt(randomIndex);
    }

    return domain;
}
