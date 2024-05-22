import { newSpecPage } from '@stencil/core/testing';
import { ModalComponent } from '../modal-component';

describe('modal-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalComponent],
      html: `<modal-component></modal-component>`,
    });
    expect(page.root).toEqualHtml(`
      <modal-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modal-component>
    `);
  });
});
