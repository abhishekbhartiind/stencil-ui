import { Component, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'multi-select',
  styleUrl: 'multi-select.css',
  shadow: true,
})
export class MultiSelectDropdown {
  @Prop() options: Array<{ value: string; label: string }> = [];
  @State() selectedOptions: string[] = [];
  @State() dropdownVisible: boolean = false;

  @Event() selectionChanged: EventEmitter<string[]>;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  handleOptionClick(optionValue: string) {
    const selectedIndex = this.selectedOptions.indexOf(optionValue);
    if (selectedIndex === -1) {
      this.selectedOptions = [...this.selectedOptions, optionValue];
    } else {
      this.selectedOptions = this.selectedOptions.filter(value => value !== optionValue);
    }
    this.selectionChanged.emit(this.selectedOptions);
  }

  render() {
    return (
      <div class="dropdown-container">
        <select class="select" multiple>
          {this.options.map(option => (
            <option value={option.value} selected={this.selectedOptions.includes(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
        <div class="selected" onClick={() => this.toggleDropdown()}>
          <span>{this.selectedOptions.length > 0 ? this.selectedOptions.join(', ') : 'Select options'}</span>
        </div>
        <div class={`options ${this.dropdownVisible ? 'visible' : ''}`}>
          {this.options.map(option => (
            <div class={`option ${this.selectedOptions.includes(option.value) ? 'selected' : ''}`} onClick={() => this.handleOptionClick(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
