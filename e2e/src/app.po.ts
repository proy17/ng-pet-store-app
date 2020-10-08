import { browser, by, element, WebElement, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.xpath('/html/body/app-root/h1')).getText() as Promise<string>;
  }

  getMaleText(): Promise<string> {
    return element(by.xpath('/html/body/app-root/app-pet-owner/div[1]/b')).getText() as Promise<string>;
  }

  getFemaleText(): Promise<string> {
    return element(by.xpath('/html/body/app-root/app-pet-owner/div[2]/b')).getText() as Promise<string>;
  }
}
