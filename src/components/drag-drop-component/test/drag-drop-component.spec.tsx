import { newSpecPage } from '@stencil/core/testing';
import { DragDropComponent } from '../drag-drop-component';

describe('drag-drop-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DragDropComponent],
      html: `<drag-drop-component></drag-drop-component>`,
    });
    expect(page.root).toEqualHtml(`
      <drag-drop-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </drag-drop-component>
    `);
  });
});
