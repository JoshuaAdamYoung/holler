import { HollerPage } from './app.po';

describe('holler App', () => {
  let page: HollerPage;

  beforeEach(() => {
    page = new HollerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
