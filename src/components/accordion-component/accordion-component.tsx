import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.css',
  shadow: true,
})
export class AccordionComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
