import { browser, by, element } from 'protractor';

export class AmazingRecipesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ar-root h1')).getText();
  }
}
