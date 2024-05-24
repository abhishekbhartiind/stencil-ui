// link-textarea.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'link-textarea',
  styleUrl: 'link-textarea.css',
  shadow: true,
})
export class LinkTextarea {
  render() {
    return (
      <div>
        <label htmlFor="textarea">Label of the Monospace Text Area</label>
        <textarea id="textarea" class="monospace"></textarea>
        <tooltip-component>
          <a href="#" id="link">
            Context Info
          </a>
          <span slot="description">Description of the Text Area Context</span>
        </tooltip-component>
      </div>
    );
  }
}
