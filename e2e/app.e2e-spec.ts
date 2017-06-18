import { AmazingRecipesPage } from './app.po';

describe('amazing-recipes App', () => {
  let page: AmazingRecipesPage;

  beforeEach(() => {
    page = new AmazingRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ar!!');
  });
});
