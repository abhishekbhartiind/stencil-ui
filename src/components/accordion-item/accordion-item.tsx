import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'accordion-item',
  styleUrl: 'accordion-item.css',
  shadow: true,
})
export class AccordionItem {
  @State() isOpen: boolean = false;
  @Prop() header: string;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class="accordion-item">
        <div class="header" onClick={() => this.toggleAccordion()}>
          {this.header}
        </div>
        <div class={`content ${this.isOpen ? 'open' : ''}`}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
