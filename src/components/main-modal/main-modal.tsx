import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'main-modal',
  styleUrl: 'main-modal.css',
  shadow: true,
})
export class MainModal {
  @State() showMainModal: boolean = false;
  @State() showHintModal: boolean = false;

  toggleMainModal() {
    this.showMainModal = !this.showMainModal;
  }

  toggleHintModal(event: Event) {
    event.preventDefault();
    this.showHintModal = !this.showHintModal;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleMainModal()}>Open Modal</button>

        {this.showMainModal ? (
          <div class="modal main-modal">
            <div class="modal-content">
              <label>
                Textarea Label
                <a href="#" class="tooltip-link" onClick={e => this.toggleHintModal(e)}>
                  Click for Hint
                </a>
              </label>
              <textarea></textarea>
              <button class="close" onClick={() => this.toggleMainModal()}>
                &times;
              </button>
            </div>
          </div>
        ) : null}

        {this.showHintModal ? (
          <div class="modal hint-modal">
            <div class="modal-content">
              <span class="close" onClick={() => this.toggleHintModal(event)}>
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
