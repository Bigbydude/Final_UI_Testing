import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async OpenUrl(url: string) {
        await this.page.goto(url);
    }

    async findElClick(locator: string) {
        await this.page.locator(locator).click({ force: true });
    }

    async findElement(locator: string) {
        await this.page.locator(locator);
    }

    async typeText(locator: string, text: string) {
        await this.page.type(locator, text, { delay: 50 });
    }

    async getText(locator) {
        return this.page.innerText(locator, { timeout: 10000 });
    }

    async frameClick(locator: string, loc: string) {
        await this.page.frameLocator(locator).locator(loc).click();
    }

    async Enter() {
        await this.page.keyboard.press('Enter');
    }
}
