const { response } = require('express');
const express=require('express')
const server=express()
require('chromedriver');
//const {Builder, By, Key, until} = require('selenium-webdriver');
//import webdriver from selenium
//const driver = new selenium.Builder().forBrowser("chrome").build();
var webdriver = require('selenium-webdriver');
   
var By = webdriver.By;

var until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').
       withCapabilities({ browserName: 'chrome', chromeOptions: { w3c: false } }).build(); ///avoid w3c errors

driver.get("https://sm.respublica.co.za/login/")

var username="****YOUR EMAIL**********"
var password="****YOUR PASSWORD*****"


server.listen(3000,()=>{
    console.log("server running")
  


  ///var user = driver.wait(until.elementLocated(By.id('email')), //timeout);
  
   username_id = driver.wait(until.elementLocated(By.id('login')), 10000);
   username_id.sendKeys(username)

   password_id =driver.wait(until.elementLocated(By.id('password')), 10000);
   password_id.sendKeys(password)


/////get login button and click it
   driver.findElements(By.xpath('//*[@id="login-form"]/div[3]/div[3]/input')).then(function(result) {
    if (result) {
        console.log("*******got hold of login button")
        login_button = driver.wait(until.elementLocated(By.xpath('//*[@id="login-form"]/div[3]/div[3]/input')),1000000)
        ///console.log(login_button)
        login_button.submit().then(function(result1) {
            //if(result1){
                console.log("********logged in")
                /////get the covid 19 form , fill it , submit with a click
              
               driver.findElements(By.xpath('//*[@id="sidebar"]/div/div/ul/li[17]/a')).then(function(result) {
                         
                          my_Covid=driver.wait(until.elementLocated(By.xpath('//*[@id="sidebar"]/div/div/ul/li[17]/a')),1000000)
                          my_Covid.click().then(function(result2){
                            console.log("********inside the COVID page")
                               ////call function to fill and submit the form
                               //driver.findElements(By.cssSelector("input[type='radio'][name='13'][value='No']"))
                              // driver.findElement({css:"input[type='radio'][name='13'][value='No']"}).click()
                               fillCovidForm().then((data) => { console.log('form filled successfully')})
                                        .catch(() => { console.log('failed to fill covid form')});
                          })
               })
//    my_Covid.click()

            //}else{
                //console.log("********login failed****")
            //}
        })
    }
    else {
        console.log("*******couldnt get hold of the login button")
    }
  }
);


      
})




async function fillCovidForm() {
          driver.findElement({css:"input[type='radio'][name='13'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='14'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='15'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='16'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='17'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='18'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='19'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='20'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='21'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='77'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='78'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='79'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='80'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='81'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='22'][value='No']"}).click()
          driver.findElement({css:"input[type='radio'][name='23'][value='No']"}).click()   
          

          driver.findElements(By.xpath('//*[@id="content"]/div[1]/div/form/div[21]/input')).then(function(result) {   
            responseButton=driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div[1]/div/form/div[21]/input')),1000000)
            responseButton.submit().then(function(result1) {
                console.log("form submitted")
            })
          })
  };






