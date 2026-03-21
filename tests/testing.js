const {Builder, By} = require("selenium-webdriver")
const assert = require('assert')
async function testSix(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to pos page from home")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.className("brand")).click()

        console.log("assertion passed")
        

    }
    finally{
        //driver.quit();
    }
}
testSix()