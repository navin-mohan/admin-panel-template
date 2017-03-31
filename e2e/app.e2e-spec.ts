import { PratheekshaPage } from './app.po';

describe('pratheeksha App', () => {
  let page: PratheekshaPage;

  beforeEach(() => {
    page = new PratheekshaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
