import { SimCreditPage } from './app.po';

describe('sim-credit App', () => {
  let page: SimCreditPage;

  beforeEach(() => {
    page = new SimCreditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
