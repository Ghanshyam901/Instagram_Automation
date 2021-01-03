const puppeteer = require('puppeteer');
const data = require("./config.json");
let noOfPost = process.argv[2];
(async function () {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com', { waitUntil: "networkidle2" });         
//taking input used id and password and login
    await page.type("input[name='username']", data.user, { delay: 100 });
    await page.type("input[name='password']", data.pwd, { delay: 100 });
    await page.click("button[type='submit']");

    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);

/// for searching userid where you want to like all pics
    await page.type("input[placeholder='Search']", "imskshyam");
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);

    //for like post 

    await page.waitForSelector("._9AhH0", { visible: true ,delay:15000});
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._9AhH0",{delay:200}),
    ]);
    let i = 0;
    do {
    await page.waitForSelector(".fr66n .wpO6b", { visible: true ,delay:4000});
        await page.click(".fr66n .wpO6b");
        
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2",visible:true,visible:true,delay:4000}),
            page.click("._65Bje.coreSpriteRightPaginationArrow"),
        ]);
        
      
        i++;
        
    } while (i < noOfPost) {
    }
})();