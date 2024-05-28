import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'main-modal',
  styleUrl: 'main-modal.css',
  shadow: true,
})
export class MainModal {
  @State() showMainModal: boolean = false;
  @State() showHintModal: boolean = false;

  private hintModal: HTMLDivElement;
  private offsetX: number = 0;
  private offsetY: number = 0;

  toggleMainModal() {
    this.showMainModal = !this.showMainModal;
  }

  toggleHintModal(event: Event) {
    event.preventDefault();
    this.showHintModal = !this.showHintModal;
  }

  handleMouseDown(event: MouseEvent) {
    if (this.hintModal) {
      const rect = this.hintModal.getBoundingClientRect();
      this.offsetX = event.clientX - rect.left;
      this.offsetY = event.clientY - rect.top;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    }
  }

  handleMouseMove = (event: MouseEvent) => {
    if (this.hintModal) {
      this.hintModal.style.left = `${event.clientX - this.offsetX}px`;
      this.hintModal.style.top = `${event.clientY - this.offsetY}px`;
    }
  };

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  };

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
              <textarea rows={15}></textarea>
              <button class="close" onClick={() => this.toggleMainModal()}>
                &times;
              </button>
            </div>
          </div>
        ) : null}

        {this.showHintModal ? (
          <div class="modal hint-modal" ref={el => (this.hintModal = el as HTMLDivElement)} onMouseDown={e => this.handleMouseDown(e)}>
            <div class="modal-content">
              <span class="close" onClick={() => this.toggleHintModal(new MouseEvent('click'))}>
                &times;
              </span>
              <textarea rows={15}></textarea>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
