import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {
  @Prop() type: string = 'text';
  @Prop() name: string;
  @Prop() value: string;
  @Prop() placeholder: string;
  @Prop() options: string[] = [];
  @Prop() rows: number = 4;
  @Prop() label: string;
  @Prop() checked: boolean = false;

  render() {
    switch (this.type) {
      case 'textarea':
        return (
          <div class="input-group">
            {this.label && <label>{this.label}</label>}
            <textarea name={this.name} placeholder={this.placeholder} rows={this.rows} value={this.value}></textarea>
          </div>
        );
      case 'radio':
        return (
          <div class="input-group">
            {this.label && <label>{this.label}</label>}
            {this.options.map(option => (
              <label>
                <input type="radio" name={this.name} value={option} checked={this.value === option} />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return (
          <div class="input-group">
            {this.label && <label>{this.label}</label>}
            <input type={this.type} name={this.name} placeholder={this.placeholder} value={this.value} checked={this.checked} />
          </div>
        );
    }
  }
}
