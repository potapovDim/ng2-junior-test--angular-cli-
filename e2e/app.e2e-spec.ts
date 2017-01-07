import { Angular2JuniorTestPage } from './app.po';

describe('angular2-junior-test App', function() {
  let page: Angular2JuniorTestPage;

  beforeEach(() => {
    page = new Angular2JuniorTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
