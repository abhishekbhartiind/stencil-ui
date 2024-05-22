import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'multi-select-dropdown',
  styleUrl: 'multi-select-dropdown.css',
  shadow: true,
})
export class MultiSelectDropdown {
  @Prop() options: string[] = []; // Input options for the dropdown
  @State() selectedOptions: string[] = []; // State to manage selected options
  @State() showDropdown: boolean = false; // State to manage dropdown visibility

  @Event() selectionChange: EventEmitter<string[]>; // Event emitter for selection change

  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };

  handleOptionClick = (option: string) => {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(opt => opt !== option);
    } else {
      this.selectedOptions = [...this.selectedOptions, option];
    }
    this.selectionChange.emit(this.selectedOptions);
  };

  render() {
    return (
      <div class="multi-select-dropdown">
        <div class="dropdown-header" onClick={this.toggleDropdown}>
          {this.selectedOptions.length ? this.selectedOptions.join(', ') : 'Select options'}
          <span class="dropdown-icon">{this.showDropdown ? '▲' : '▼'}</span>
        </div>
        {this.showDropdown && (
          <div class="dropdown-options">
            {this.options.map(option => (
              <div class={`dropdown-option ${this.selectedOptions.includes(option) ? 'selected' : ''}`} onClick={() => this.handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
