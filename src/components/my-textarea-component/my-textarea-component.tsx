import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-textarea-component',
  styleUrl: 'my-textarea-component.css',
  shadow: true,
})
export class MyTextareaComponent {
  @State() showModal: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  render() {
    return (
      <div class="textarea-container">
        <label>
          Textarea Label
          <a href="#" class="tooltip-link" onClick={() => this.toggleModal()}>
            ⓘ
          </a>
        </label>
        <textarea rows={10}></textarea>

        {this.showModal ? (
          <div class="modal">
            <div class="modal-content">
              <span class="close" onClick={() => this.toggleModal()}>
                &times;
              </span>
              <p>This is a tooltip modal with information.</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
