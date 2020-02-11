
let homepage = function () {
    let firstNumber_input = element(by.css('input[ng-model="first"]'));
    let secondeNumber_input = element(by.css('input[ng-model="second"]'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    };
    this.enterFirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };
    this.enterSecondNumber = function (secondNo) {
        secondeNumber_input.sendKeys(secondNo);
    };
    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();