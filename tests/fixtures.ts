import { test as base, Page } from '@playwright/test'
import { TextBoxPage } from '../page-object/textBoxPage'

type TestFixtures = {
    texboxPage: TextBoxPage
}

export const test = base.extend<TestFixtures>({
    // loginPage fixture
  texboxPage: async ({ page }, use) => {
    await use(new TextBoxPage(page))
  }
})

export { expect } from '@playwright/test'