let homepage = require('../pages/homepage.js')

describe('calutaro tests', function () {

    it('addition test', function () {
        //browser.driver.manage().window().maximize();

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.css('input[ng-model="first"]')).clear().sendKeys('2');
        homepage.enterFirstNumber('2');
        //element(by.css('input[ng-model="second"]')).clear().sendKeys('3');
        homepage.enterSecondNumber('3');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('5');

        browser.sleep(3000);

    });

    it('substraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('2');

        homepage.enterSecondNumber('3');

        homepage.clickGo1();

        homepage.verifyResult('5');

        browser.sleep(2000);

    })
});