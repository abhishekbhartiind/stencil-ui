import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-textarea-modal',
  styleUrl: 'my-textarea-modal.css',
  shadow: true,
})
export class MyTextareaModal {
  @State() showHintModal: boolean = false;

  toggleHintModal() {
    this.showHintModal = !this.showHintModal;
  }

  render() {
    return (
      <div class="modal">
        <div class="modal-content">
          <label>
            Textarea Label
            <a
              href="#"
              class="tooltip-link"
              onClick={e => {
                e.preventDefault();
                this.toggleHintModal();
              }}
            >
              ⓘ
            </a>
          </label>
          <textarea></textarea>
        </div>

        {this.showHintModal ? (
          <div class="hint-modal">
            <div class="hint-modal-content">
              <span class="close" onClick={() => this.toggleHintModal()}>
                &times;
              </span>
              <p>This is a hint modal with additional information.</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
