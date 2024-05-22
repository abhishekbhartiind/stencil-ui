import { Component, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'multi-select',
  styleUrl: 'multi-select.css',
  shadow: true,
})
export class MultiSelectDropdown {
  @Prop() options: Array<{ value: string; label: string }> = [];
  @State() selectedOptions: string[] = [];

  @Event() selectionChanged: EventEmitter<string[]>;

  handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    this.selectedOptions = selectedOptions;
    this.selectionChanged.emit(this.selectedOptions);
  }

  render() {
    return (
      <div>
        <select multiple onChange={event => this.handleChange(event)}>
          {this.options.map(option => (
            <option value={option.value} selected={this.selectedOptions.includes(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
