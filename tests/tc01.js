const {Builder, By} = require("selenium-webdriver")
const assert = require('assert')
async function testOne(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to menu page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("menu-btn")).click()

        console.log("test 1 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testTwo(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to pos page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("pos-btn")).click()

        console.log("test 2 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testThree(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to about page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("about-btn")).click()

        console.log("test 3 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testFour(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to contact from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("contact-btn")).click()

        console.log("test 4 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testFive(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to home")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.id("home-btn")).click()

        console.log("test 5 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testSix(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to home")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.className("brand")).click()

        console.log("test 6 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testSeven(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to menu")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.className("btn-primary")).click()

        console.log("test 7 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testEight(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to contact")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.className("btn-secondary")).click()

        console.log("test 8 passed")
        

    }
    finally{
        driver.quit();
    }
}


async function testNine(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("filter to cold drinks")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.css('[data-testid="menu-filter-cold-drinks"]')).click()

        console.log("test 9 passed")
        

    }
    finally{
        driver.quit();
    }
}


async function testTen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("filter to hot drinks")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.css('[data-testid="menu-filter-hot-drinks"]')).click()

        console.log("test 10 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testEleven(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("filter to snacks")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.css('[data-testid="menu-filter-snacks"]')).click()

        console.log("test 11 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testTwelve(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("testing search")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("Testing for Search")

        console.log("test 12 passed")
        

    }
    finally{
        driver.quit();
    }
}


async function testThirteen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("Cold Coffee")

        console.log("test 13 passed")
        

    }
    finally{
        driver.quit();
    }
}


async function testFourteen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")
        
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("Raspberry Pie")

        console.log("test 14 passed")
        

    }
    finally{
        driver.quit();
    }
}


async function testFifteen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")

        await driver.findElement(By.css('[data-testid="menu-filter-cold-drinks"]')).click()
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("Cold Coffee")

        console.log("test 15 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testSixteen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")

        await driver.findElement(By.css('[data-testid="menu-filter-hot-drinks"]')).click()
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("Cappuccino")

        console.log("test 16 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testSeventeen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")

        await driver.findElement(By.css('[data-testid="menu-filter-snacks"]')).click()
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("Sandwich Ham")

        console.log("test 17 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testEighteen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")

        await driver.findElement(By.css('[data-testid="menu-filter-cold-drinks"]')).click()
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("NOT cold coffee")

        console.log("test 18 passed")
        

    }
    finally{
        driver.quit();
    }
}

async function testNineteen(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")

        await driver.findElement(By.css('[data-testid="menu-filter-hot-drinks"]')).click()
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("NOT hot coffee")

        console.log("test 19 passed")
        

    }
    finally{
        driver.quit();
    }
}


async function testTwenty(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("search validity")
        await driver.get("http://localhost:3000/menu")

        await driver.findElement(By.css('[data-testid="menu-filter-snacks"]')).click()
        await driver.findElement(By.css('[data-testid="menu-search-input"]')).sendKeys("NOT a snack")

        console.log("test 20 passed")
        

    }
    finally{
        driver.quit();
    }
}


testOne()
testTwo()
testThree()
testFour()
testFive()
testSix()
testSeven()
testEight()
testNine()
testTen()
testEleven()
testTwelve()
testThirteen()
testFourteen()
testFifteen()
testSixteen()
testSeventeen()
testEighteen()
testNineteen()
testTwenty()