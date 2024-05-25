/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AccordionComponent {
    }
    interface AccordionItem {
        "header": string;
    }
    interface AppRoot {
    }
    interface DragDropComponent {
    }
    interface InputComponent {
        "checked": boolean;
        "label": string;
        "name": string;
        "options": string[];
        "placeholder": string;
        "rows": number;
        "type": string;
        "value": string;
    }
    interface JsonDisplay {
        "jsonData": string;
    }
    interface LinkTextarea {
    }
    interface MainModal {
    }
    interface ModalComponent {
        "isOpen": boolean;
    }
    interface MultiSelect {
        "options": Array<{ value: string; label: string }>;
    }
    interface MultiSelectDropdown {
        "options": string[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyTextareaComponent {
    }
    interface MyTextareaModal {
    }
    interface TooltipComponent {
    }
}
export interface MultiSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMultiSelectElement;
}
export interface MultiSelectDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMultiSelectDropdownElement;
}
declare global {
    interface HTMLAccordionComponentElement extends Components.AccordionComponent, HTMLStencilElement {
    }
    var HTMLAccordionComponentElement: {
        prototype: HTMLAccordionComponentElement;
        new (): HTMLAccordionComponentElement;
    };
    interface HTMLAccordionItemElement extends Components.AccordionItem, HTMLStencilElement {
    }
    var HTMLAccordionItemElement: {
        prototype: HTMLAccordionItemElement;
        new (): HTMLAccordionItemElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLDragDropComponentElement extends Components.DragDropComponent, HTMLStencilElement {
    }
    var HTMLDragDropComponentElement: {
        prototype: HTMLDragDropComponentElement;
        new (): HTMLDragDropComponentElement;
    };
    interface HTMLInputComponentElement extends Components.InputComponent, HTMLStencilElement {
    }
    var HTMLInputComponentElement: {
        prototype: HTMLInputComponentElement;
        new (): HTMLInputComponentElement;
    };
    interface HTMLJsonDisplayElement extends Components.JsonDisplay, HTMLStencilElement {
    }
    var HTMLJsonDisplayElement: {
        prototype: HTMLJsonDisplayElement;
        new (): HTMLJsonDisplayElement;
    };
    interface HTMLLinkTextareaElement extends Components.LinkTextarea, HTMLStencilElement {
    }
    var HTMLLinkTextareaElement: {
        prototype: HTMLLinkTextareaElement;
        new (): HTMLLinkTextareaElement;
    };
    interface HTMLMainModalElement extends Components.MainModal, HTMLStencilElement {
    }
    var HTMLMainModalElement: {
        prototype: HTMLMainModalElement;
        new (): HTMLMainModalElement;
    };
    interface HTMLModalComponentElement extends Components.ModalComponent, HTMLStencilElement {
    }
    var HTMLModalComponentElement: {
        prototype: HTMLModalComponentElement;
        new (): HTMLModalComponentElement;
    };
    interface HTMLMultiSelectElementEventMap {
        "selectionChanged": string[];
    }
    interface HTMLMultiSelectElement extends Components.MultiSelect, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMultiSelectElementEventMap>(type: K, listener: (this: HTMLMultiSelectElement, ev: MultiSelectCustomEvent<HTMLMultiSelectElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMultiSelectElementEventMap>(type: K, listener: (this: HTMLMultiSelectElement, ev: MultiSelectCustomEvent<HTMLMultiSelectElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMultiSelectElement: {
        prototype: HTMLMultiSelectElement;
        new (): HTMLMultiSelectElement;
    };
    interface HTMLMultiSelectDropdownElementEventMap {
        "selectionChange": string[];
    }
    interface HTMLMultiSelectDropdownElement extends Components.MultiSelectDropdown, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMultiSelectDropdownElementEventMap>(type: K, listener: (this: HTMLMultiSelectDropdownElement, ev: MultiSelectDropdownCustomEvent<HTMLMultiSelectDropdownElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMultiSelectDropdownElementEventMap>(type: K, listener: (this: HTMLMultiSelectDropdownElement, ev: MultiSelectDropdownCustomEvent<HTMLMultiSelectDropdownElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMultiSelectDropdownElement: {
        prototype: HTMLMultiSelectDropdownElement;
        new (): HTMLMultiSelectDropdownElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTextareaComponentElement extends Components.MyTextareaComponent, HTMLStencilElement {
    }
    var HTMLMyTextareaComponentElement: {
        prototype: HTMLMyTextareaComponentElement;
        new (): HTMLMyTextareaComponentElement;
    };
    interface HTMLMyTextareaModalElement extends Components.MyTextareaModal, HTMLStencilElement {
    }
    var HTMLMyTextareaModalElement: {
        prototype: HTMLMyTextareaModalElement;
        new (): HTMLMyTextareaModalElement;
    };
    interface HTMLTooltipComponentElement extends Components.TooltipComponent, HTMLStencilElement {
    }
    var HTMLTooltipComponentElement: {
        prototype: HTMLTooltipComponentElement;
        new (): HTMLTooltipComponentElement;
    };
    interface HTMLElementTagNameMap {
        "accordion-component": HTMLAccordionComponentElement;
        "accordion-item": HTMLAccordionItemElement;
        "app-root": HTMLAppRootElement;
        "drag-drop-component": HTMLDragDropComponentElement;
        "input-component": HTMLInputComponentElement;
        "json-display": HTMLJsonDisplayElement;
        "link-textarea": HTMLLinkTextareaElement;
        "main-modal": HTMLMainModalElement;
        "modal-component": HTMLModalComponentElement;
        "multi-select": HTMLMultiSelectElement;
        "multi-select-dropdown": HTMLMultiSelectDropdownElement;
        "my-component": HTMLMyComponentElement;
        "my-textarea-component": HTMLMyTextareaComponentElement;
        "my-textarea-modal": HTMLMyTextareaModalElement;
        "tooltip-component": HTMLTooltipComponentElement;
    }
}
declare namespace LocalJSX {
    interface AccordionComponent {
    }
    interface AccordionItem {
        "header"?: string;
    }
    interface AppRoot {
    }
    interface DragDropComponent {
    }
    interface InputComponent {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "options"?: string[];
        "placeholder"?: string;
        "rows"?: number;
        "type"?: string;
        "value"?: string;
    }
    interface JsonDisplay {
        "jsonData"?: string;
    }
    interface LinkTextarea {
    }
    interface MainModal {
    }
    interface ModalComponent {
        "isOpen"?: boolean;
    }
    interface MultiSelect {
        "onSelectionChanged"?: (event: MultiSelectCustomEvent<string[]>) => void;
        "options"?: Array<{ value: string; label: string }>;
    }
    interface MultiSelectDropdown {
        "onSelectionChange"?: (event: MultiSelectDropdownCustomEvent<string[]>) => void;
        "options"?: string[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyTextareaComponent {
    }
    interface MyTextareaModal {
    }
    interface TooltipComponent {
    }
    interface IntrinsicElements {
        "accordion-component": AccordionComponent;
        "accordion-item": AccordionItem;
        "app-root": AppRoot;
        "drag-drop-component": DragDropComponent;
        "input-component": InputComponent;
        "json-display": JsonDisplay;
        "link-textarea": LinkTextarea;
        "main-modal": MainModal;
        "modal-component": ModalComponent;
        "multi-select": MultiSelect;
        "multi-select-dropdown": MultiSelectDropdown;
        "my-component": MyComponent;
        "my-textarea-component": MyTextareaComponent;
        "my-textarea-modal": MyTextareaModal;
        "tooltip-component": TooltipComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accordion-component": LocalJSX.AccordionComponent & JSXBase.HTMLAttributes<HTMLAccordionComponentElement>;
            "accordion-item": LocalJSX.AccordionItem & JSXBase.HTMLAttributes<HTMLAccordionItemElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "drag-drop-component": LocalJSX.DragDropComponent & JSXBase.HTMLAttributes<HTMLDragDropComponentElement>;
            "input-component": LocalJSX.InputComponent & JSXBase.HTMLAttributes<HTMLInputComponentElement>;
            "json-display": LocalJSX.JsonDisplay & JSXBase.HTMLAttributes<HTMLJsonDisplayElement>;
            "link-textarea": LocalJSX.LinkTextarea & JSXBase.HTMLAttributes<HTMLLinkTextareaElement>;
            "main-modal": LocalJSX.MainModal & JSXBase.HTMLAttributes<HTMLMainModalElement>;
            "modal-component": LocalJSX.ModalComponent & JSXBase.HTMLAttributes<HTMLModalComponentElement>;
            "multi-select": LocalJSX.MultiSelect & JSXBase.HTMLAttributes<HTMLMultiSelectElement>;
            "multi-select-dropdown": LocalJSX.MultiSelectDropdown & JSXBase.HTMLAttributes<HTMLMultiSelectDropdownElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-textarea-component": LocalJSX.MyTextareaComponent & JSXBase.HTMLAttributes<HTMLMyTextareaComponentElement>;
            "my-textarea-modal": LocalJSX.MyTextareaModal & JSXBase.HTMLAttributes<HTMLMyTextareaModalElement>;
            "tooltip-component": LocalJSX.TooltipComponent & JSXBase.HTMLAttributes<HTMLTooltipComponentElement>;
        }
    }
}
