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
    const json = {
      substation_ID: 'string',
      substation_Feeder_Code: 'string',
      attribute1: 'string',
      transformer_Id: 'string',
      premise_Id: 'string',
      location_Type: 'string',
      address1: 'string',
      address2: 'string',
      city: 'string',
      country: 'string',
      postalCode: 'string',
      latitude: 'string',
      longitude: 'string',
      disNetwork_Type_Id: 'string',
      locationId: 'string',
      util_Service_PT_Id: 'string',
      service_Type: 'string',
      sP_Longitude: 'string',
      sP_Latitude: 'string',
      mac_Id: 'string',
      note: 'string',
      admin_StateName: 'string',
      servicePoint_Id: 'string',
      amM_Id: 'integer',
    };

    return (
      <div class="textarea-container">
        <label>
          Textarea Label
          <a href="#" class="tooltip-link" onClick={() => this.toggleModal()}>
            ⓘ
          </a>
        </label>
        <textarea rows={10} value={JSON.stringify(json, null, 2)}></textarea>

        {this.showModal ? (
          <div class="modal">
            <div class="modal-content">
              <span class="close" onClick={() => this.toggleModal()}>
                &times;
              </span>
              <div>{JSON.stringify(json, null, 2)}</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
