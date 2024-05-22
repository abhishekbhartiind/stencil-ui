import { newE2EPage } from '@stencil/core/testing';

describe('drag-drop-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<drag-drop-component></drag-drop-component>');

    const element = await page.find('drag-drop-component');
    expect(element).toHaveClass('hydrated');
  });
});
