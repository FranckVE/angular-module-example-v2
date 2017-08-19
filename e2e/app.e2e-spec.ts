import { AngularModuleExampleV2Page } from './app.po';

describe('angular-module-example-v2 App', () => {
  let page: AngularModuleExampleV2Page;

  beforeEach(() => {
    page = new AngularModuleExampleV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
