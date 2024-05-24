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

  handleSelectSelectionChange(event: CustomEvent<string[]>) {
    console.log('Selected options:', event.detail);
  }

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
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ];

    return (
      <div>
        <json-display
          json-data='{
            "substation_ID": "string",
            "substation_Feeder_Code": "string",
            "attribute1": "string",
            "transformer_Id": "string",
            "premise_Id": "string",
            "location_Type": "string",
            "address1": "string",
            "address2": "string",
            "city": "string",
            "country": "string",
            "postalCode": "string",
            "latitude": "string",
            "longitude": "string",
            "disNetwork_Type_Id": "string",
            "locationId": "string",
            "util_Service_PT_Id": "string",
            "service_Type": "string",
            "sP_Longitude": "string",
            "sP_Latitude": "string",
            "mac_Id": "string",
            "note": "string",
            "admin_StateName": "string",
            "servicePoint_Id": "string",
            "amM_Id": "integer",
            "nestedObject": {
               "key1": "value1",
               "key2": "aaa"
               "nestedArray": [1, 2, 3, 4]
            }
         }'
        ></json-display>
        <div>
          <h1>Stencil Multiple Select Dropdown Example</h1>
          <multi-select options={options} onSelectionChanged={event => this.handleSelectSelectionChange(event)}></multi-select>
        </div>

        <link-textarea></link-textarea>
        <div>
          <h1>Multi-Select Dropdown</h1>
          <multi-select-dropdown options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} onSelectionChange={this.handleSelectionChange}></multi-select-dropdown>
          <p>Selected Options: {this.selectedOptions.join(', ')}</p>
        </div>
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
        <drag-drop-component></drag-drop-component>
      </div>
    );
  }
}
