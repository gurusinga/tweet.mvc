describe('TweetMVC End-to-End', () => {

  const addData = (amount) => {
    for (let index = 0; index < amount; index++) {
      element(by.model('viewer.inputModel')).sendKeys('This is input data.');
      element(by.buttonText('Post')).click();
    }
  }

  const clickButton = (text, amount) => {
    for (let cycle = 0; cycle < amount; cycle++) {
      const buttons = element.all(by.buttonText(text));
      buttons.each((button) => {
        button.isPresent().then((isVisible) => {
          if (isVisible) button.click();
        })
      });
    }
  }

  describe('Add data', () => {

    beforeEach(() => {
      browser.restartSync();
      browser.get('http://localhost:3000');
    });

    // This sample application has initial 1 initial object therefore each iteration will add 1 object.
    it('should add 10 data', () => {
      addData(10);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(11);
    });
    it('should add 50 data', () => {
      addData(50);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(51);
    });
    it('should add 100 data', () => {
      addData(100);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(101);
    });
    it('should add 250 data', () => {
      addData(250);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(251);
    });
    it('should add 500 data', () => {
      addData(500);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(501);
    });
    it('should add 750 data', () => {
      addData(750);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(751);
    });
    it('should add 1000 data', () => {
      addData(1000);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(1001);
    });
    it('should add 1500 data', () => {
      addData(1500);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(1501);
    });
    it('should add 2000 data', () => {
      addData(2000);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(2001);
    });
  });

  describe('Add and remove data', () => {

    beforeEach(() => {
      browser.get('http://localhost:3000');
    });

    it('should add and remove data 10 times', () => {
      addData(10);
      clickButton('X', 10);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 50 times', () => {
      addData(50);
      clickButton('X', 50);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 100 times', () => {
      addData(100);
      clickButton('X', 100);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 250 times', () => {
      addData(250);
      clickButton('X', 250);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 500 times', () => {
      addData(500);
      clickButton('X', 500);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 750 times', () => {
      addData(750);
      clickButton('X', 750);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 1000 times', () => {
      addData(1000);
      clickButton('X', 1000);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 1500 times', () => {
      addData(1500);
      clickButton('X', 1500);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
    it('should add and remove data 2000 times', () => {
      addData(2000);
      clickButton('X', 2000);
      expect(element.all(by.repeater('item in viewer.model')).count()).toEqual(0);
    });
  });
});
