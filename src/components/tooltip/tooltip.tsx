// tooltip.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tooltip-component',
  styleUrl: 'tooltip.css',
  shadow: true,
})
export class TooltipComponent {
  render() {
    return (
      <div class="tooltip">
        <slot></slot>
        <span class="tooltiptext">
          <slot name="description"></slot>
        </span>
      </div>
    );
  }
}
