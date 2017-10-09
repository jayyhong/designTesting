import { DesignPracticePage } from './app.po';

describe('design-practice App', () => {
  let page: DesignPracticePage;

  beforeEach(() => {
    page = new DesignPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
