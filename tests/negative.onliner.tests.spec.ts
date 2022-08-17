import { expect, test } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { LOCATORS } from '../Helpers/Locators';
import { POSITIVE_TXT } from '../Helpers/PositiveConsts';
import { NEGATIVE_TXT } from '../Helpers/NegativeConsts';

test.beforeEach(async ({ page }) => {
    const open = new BasePage(page);
    await open.OpenUrl('/');
});
test.describe('negative tests', async () => {
    test('testNegative', async ({ page }) => {
        const search = new BasePage(page);
        await search.findElement(LOCATORS.SEARCH_FIELD);
        await search.typeText(LOCATORS.SEARCH_FIELD, 'samsung');
        await search.frameClick(LOCATORS.SWITCH_FRAME, LOCATORS.SEARCH_CLOSE);
        const pageSearch = await page.locator(LOCATORS.SEARCH_FIELD);
        await expect(pageSearch).not.toBeUndefined();
    });

    test('testNegative2', async ({ page }) => {
        const addPhone = new BasePage(page);
        await addPhone.findElement(LOCATORS.SEARCH_FIELD);
        await addPhone.typeText(LOCATORS.SEARCH_FIELD, 'samsung');
        await addPhone.frameClick(LOCATORS.SWITCH_FRAME, LOCATORS.SAMSUNG);
        const phone = await page.locator(LOCATORS.SAMSUNG);
        await expect(phone).not.toBe(Object);
        await addPhone.findElClick(LOCATORS.ADD_BUCKET);
    });

    test('testNegative3', async ({ page }) => {
        const weather = new BasePage(page);
        await weather.findElClick(LOCATORS.WEATHER);
        const info = await page.locator(LOCATORS.WEATHER);
        await expect(info).not.toBeVisible({ timeout: 1000 });
        await weather.findElClick(LOCATORS.CITY_FIRST);
        await weather.findElClick(LOCATORS.CITY_SECOND);
    });

    test('testNegative4', async ({ page }) => {
        const authorization = new BasePage(page);
        await authorization.findElClick(LOCATORS.AUTOR);
        await authorization.findElClick(LOCATORS.LOGIN);
        await authorization.typeText(LOCATORS.LOGIN, POSITIVE_TXT.LOG);
        await authorization.findElClick(LOCATORS.PASSWORD);
        await authorization.typeText(LOCATORS.PASSWORD, POSITIVE_TXT.PASS);
        await authorization.findElClick(LOCATORS.AUTH_FORM);
        const auth = await authorization.getText(LOCATORS.AUTH_FORM);
        await expect(auth).not.toBe(NEGATIVE_TXT.NEGATIVE_BUTTON);
        await page.pause();
    });

    test('testNegative5', async ({ page }) => {
        const findOil = new BasePage(page);
        await findOil.findElClick(LOCATORS.OIL_FRIST);
        await findOil.findElement(LOCATORS.OIL_SECOND);
        const oil = await findOil.getText(LOCATORS.OIL_SECOND);
        await expect(oil).not.toBe(NEGATIVE_TXT.NEGATIVE_OIL);
    });

    test('testNegative6', async ({ page }) => {
        const cur = new BasePage(page);
        await cur.findElClick(LOCATORS.CURRENCY);
        const cur2 = await cur.getText(LOCATORS.RESULT);
        await expect(cur2).not.toHaveLength(15);
    });

    test('testNegative7', async ({ page }) => {
        const card = new BasePage(page);
        await card.findElClick(LOCATORS.CLEVER);
        await card.findElement(LOCATORS.ADD_CART);
        const card2 = await card.getText(LOCATORS.ADD_CART);
        await expect(card2).not.toBe(NEGATIVE_TXT.NEGATIVE_INTRO);
    });
});
