import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'drag-drop-component',
  styleUrl: 'drag-drop-component.css',
  shadow: true,
})
export class DragDropComponent {
  @State() items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  @State() dragSrcEl: HTMLElement;

  handleDragStart(e: DragEvent) {
    this.dragSrcEl = e.target as HTMLElement;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.dragSrcEl.innerHTML);
    }
  }

  handleDragOver(e: DragEvent) {
    e.preventDefault();
    e.dataTransfer!.dropEffect = 'move';
  }

  handleDrop(e: DragEvent, index: number) {
    e.stopPropagation();

    if (this.dragSrcEl !== e.target) {
      const dragSrcIndex = this.items.indexOf(this.dragSrcEl.innerHTML);
      const dropIndex = index;

      const items = [...this.items];
      items.splice(dragSrcIndex, 1);
      items.splice(dropIndex, 0, this.dragSrcEl.innerHTML);

      this.items = items;
    }

    return false;
  }

  render() {
    return (
      <div class="drag-container">
        {this.items.map((item, index) => (
          <div class="drag-item" draggable={true} onDragStart={e => this.handleDragStart(e)} onDragOver={e => this.handleDragOver(e)} onDrop={e => this.handleDrop(e, index)}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}
