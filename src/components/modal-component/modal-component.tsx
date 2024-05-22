import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'modal-component',
  styleUrl: 'modal-component.css',
  shadow: true,
})
export class ModalComponent {
  @Prop() isOpen: boolean = false;
  @State() visible: boolean = false;

  componentWillLoad() {
    this.visible = this.isOpen;
  }

  componentWillUpdate() {
    this.visible = this.isOpen;
  }

  closeModal() {
    this.visible = false;
  }

  render() {
    return (
      <div class={`modal ${this.visible ? 'visible' : ''}`}>
        <div class="modal-content">
          <span class="close" onClick={() => this.closeModal()}>
            &times;
          </span>
          <slot></slot>
        </div>
      </div>
    );
  }
}
