/* eslint-env jest */
const puppeteer = require('puppeteer')

describe('visit home page', () => {
  test('should show correct title', async function () {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3001/ka/')
    const title = await page.title()

    browser.close()

    expect(title).toEqual('GeorgianChant.org')
  })
})
