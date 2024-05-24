// json-display.tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'json-display',
  styleUrl: 'json-display.css',
  shadow: true,
})
export class JsonDisplay {
  @Prop() jsonData: string;

  parseJson() {
    try {
      return JSON.parse(this.jsonData);
    } catch (e) {
      console.error('Invalid JSON data', e);
      return {};
    }
  }

  renderJson(data) {
    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <div class="json-entry">
          <span class="json-key">[{index}]:</span> {this.renderJson(item)}
        </div>
      ));
    } else if (typeof data === 'object' && data !== null) {
      return Object.entries(data).map(([key, value]) => (
        <div class="json-entry">
          <span class="json-key">{key}:</span> {this.renderJson(value)}
        </div>
      ));
    } else {
      return <span class="json-value">{String(data)}</span>;
    }
  }

  render() {
    const data = this.parseJson();
    return <div class="json-container">{this.renderJson(data)}</div>;
  }
}
