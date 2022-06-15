const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const minimal_args = [
    '--autoplay-policy=user-gesture-required',
    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-client-side-phishing-detection',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-domain-reliability',
    '--disable-extensions',
    '--disable-features=AudioServiceOutOfProcess',
    '--disable-hang-monitor',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-offer-store-unmasked-wallet-cards',
    '--disable-popup-blocking',
    '--disable-print-preview',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-setuid-sandbox',
    '--disable-speech-api',
    '--disable-sync',
    '--hide-scrollbars',
    '--ignore-gpu-blacklist',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-default-browser-check',
    '--no-first-run',
    '--no-pings',
    '--no-sandbox',
    '--no-zygote',
    '--password-store=basic',
    '--use-gl=swiftshader',
    '--use-mock-keychain',
  ];
const autoTraderScraper = async (make, model, minYear, zip) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: minimal_args
      });
    const page = await browser.newPage();
    // await page.goto(`https://www.autotrader.com/cars-for-sale/all-cars?zip=${zip}&makeCodeList=${make.toUpperCase()}&modelCodeList=${model.toUpperCase()}`)
    await page.goto(`https://www.cars.com/shopping/results/?stock_type=used&makes=${make}&models=${make}-${model}&zip=${zip}`)

    await page.screenshot({path: 'screenshot.png'});
    // const prices = await page.$$eval('span.first-price', anchors => {
    //     return anchors.map(anchor => anchor.textContent.trim())
    // });
    // console.log('This is prices: ', prices)
    await browser.close();



    const cars = [];
    cheerioScraperAutoTrader = async (url) => {
    // 

    await axios(url)
        .then(response => {
        const htmlData = response.data;
        const $ = cheerio.load(htmlData);
        const date = new Date();
        const actualDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

        $('.col-xs-12').find('.inventory-listing').map((i, el) => {    
            const vehicleObj = {};
            const priceElement = $(el).find('.first-price');
            const mileageElement = $(el).find('.item-card-specifications').find('.text-bold');
            console.log($(el).find('a').find('div').html());
            // const image = $(el).find('.padding-0 > .row > .item-card > .col-xs-12 > .positioned-overlay > .positioned-overlay-wrapper > .positioned-overlay-base > a > div > img').attr('src') ? 
            //         $(el).find('.padding-0 > .row > .item-card > .col-xs-12 > .positioned-overlay > .positioned-overlay-wrapper > .positioned-overlay-base > a > div > img').attr('src')
            //         : '' ;
            const titleElement = $(el).find('.row').find('.text-left').find('.text-bold');
            // console.log('hello Im title element', titleElement)
            const url = `autotrader.com${$(el).find('a').attr('href')}`;
            // console.log('are we here?', priceElement, mileageElement, image, titleElement, url)
            vehicleObj.price = Number(priceElement.text().replace(/\D/g, ''));
            vehicleObj.image = 'https://media.nbclosangeles.com/2021/10/Uber_StarCars_PRHero_SB_STREET_16x9-01.png?fit=1920%2C1080&quality=85&strip=all';
            vehicleObj.mileage = Number(mileageElement.text().replace(/\D/g, ''));
            vehicleObj.year = Number(titleElement.text().split(' ').slice(0, 4).join('').replace(/\D/g, '')); // [2015, Honda, Civic, LX]
            vehicleObj.model = model;
            vehicleObj.make = make;
            vehicleObj.url = url;
            vehicleObj.zip = Number(zip);
            vehicleObj.date = actualDate;
            cars.push(vehicleObj);
            // console.log(titleElement.text().trim())
            
            })
        })
        .catch(err => console.log(err, 'Error in autoTraderScraper function'));
    }

    // cheerioScrapeCarsCom is working perfectly
    await cheerioScraperAutoTrader(`https://www.autotrader.com/cars-for-sale/all-cars/${make.toLowerCase()}/${model.toLowerCase()}/${zip}?searchRadius=50&startYear=${minYear}&sortBy=derivedpriceASC&numRecords=50`);
    //  console.log('cars', cars, 'end cars')
    
    return cars.slice(3);
}


module.exports = autoTraderScraper;