const puppeteer = require('puppeteer');

(async() => {
    let quantcastUrl = 'https://www.quantcast.com/';

    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    await page.goto(quantcastUrl, {waitUntil: 'networkidle2'});

    let data = await page.evaluate(() => {
        let quantcastText = document.querySelector('#qc-cmp2-ui > div.qc-cmp2-consent-info > div > div > p').innerText;
        console.log(quantcastText);
        return{
            quantcastText
        }
    });
    console.log(data);
    debugger;
    await browser.close();
})