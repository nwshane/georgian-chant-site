/* eslint-env jest */
const puppeteer = require('puppeteer')

describe('visit Chant Page', () => {
  test('should show chant name', async function () {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('http://localhost:3001/en/chants/shen-khar-venakhi')
    const title = await page.title()

    browser.close()

    expect(title).toEqual('Shen khar venakhi - GeorgianChant.org')
  })
})
