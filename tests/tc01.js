const {Builder, By} = require("selenium-webdriver")
const assert = require('assert')
async function testOne(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to menu page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("menu-btn")).click()

        console.log("Test one successful")
        

    }
    finally{
        //driver.quit();
    }
}

async function testTwo(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to pos page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("pos-btn")).click()

        console.log("Test 2 Successful")
        

    }
    finally{
        //driver.quit();
    }
}

async function testThree(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to about page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.id("about-btn")).click()

        console.log("Test Three Successful")
        

    }
    finally{
        //driver.quit();
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
        //driver.quit();
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
        //driver.quit();
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
        //driver.quit();
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
        //driver.quit();
    }
}


async function testEight(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("navigate to pos page from home")
        await driver.get("http://localhost:3000/")
        
        await driver.findElement(By.className("btn-secondary")).click()

        console.log("test 8 passed")
        

    }
    finally{
        //driver.quit();
    }
}

async function testNine(){
    let driver = await new Builder().forBrowser("chrome").build()
    
    try{
        console.log("menu testing")
        await driver.get("http://localhost:3000/menu")
        
        let text = await driver.findElement(By.text("Cold Drinks"))
        await driver.findElement(By.className("btn-secondary")).click()

        console.log("test 8 passed")
        

    }
    finally{
        //driver.quit();
    }
}

testOne()
testTwo()
testThree()
testFour()
testFive()
testSix()
testSeven()