import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() selectedOptions: string[] = [];

  handleSelectionChange = (event: CustomEvent<string[]>) => {
    this.selectedOptions = event.detail;
  };

  render() {
    return (
      <div>
        <h1>Multi-Select Dropdown</h1>
        <multi-select-dropdown options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} onSelectionChange={this.handleSelectionChange}></multi-select-dropdown>
        <p>Selected Options: {this.selectedOptions.join(', ')}</p>
      </div>
    );
  }
}
