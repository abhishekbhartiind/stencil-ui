import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() selectedOptions: string[] = [];
  @State() textValue: string = '';
  @State() radioValue: string = 'Option 1';
  @State() textareaValue: string = '';
  @State() showModal: boolean = false;

  handleSelectionChange = (event: CustomEvent<string[]>) => {
    this.selectedOptions = event.detail;
  };

  handleInputChange(event) {
    const target = event.target;
    this[target.name] = target.value;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  render() {
    return (
      <div>
        <h1>Multi-Select Dropdown</h1>
        <multi-select-dropdown options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} onSelectionChange={this.handleSelectionChange}></multi-select-dropdown>
        <p>Selected Options: {this.selectedOptions.join(', ')}</p>
        <div>
          <h1>Custom Input Component</h1>
          <input-component
            type="text"
            name="textValue"
            label="Text Input"
            placeholder="Enter text"
            value={this.textValue}
            onInput={event => this.handleInputChange(event)}
          ></input-component>
          <input-component
            type="radio"
            name="radioValue"
            label="Radio Input"
            options={['Option 1', 'Option 2']}
            value={this.radioValue}
            onInput={event => this.handleInputChange(event)}
          ></input-component>
          <input-component
            type="textarea"
            name="textareaValue"
            label="Textarea Input"
            placeholder="Enter text"
            value={this.textareaValue}
            onInput={event => this.handleInputChange(event)}
          ></input-component>
        </div>
        <accordion-component>
          <accordion-item header="Section 1">
            <p>Content for section 1</p>
          </accordion-item>
          <accordion-item header="Section 2">
            <p>Content for section 2</p>
          </accordion-item>
        </accordion-component>
        <div>
          <button onClick={() => this.toggleModal()}>Open Modal</button>
          <modal-component isOpen={this.showModal}>
            <p>This is a modal</p>
            <button onClick={() => this.toggleModal()}>Close Modal</button>
          </modal-component>
        </div>
      </div>
    );
  }
}
