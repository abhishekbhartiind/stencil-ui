/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
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
}
export interface MultiSelectDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMultiSelectDropdownElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
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
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "multi-select-dropdown": HTMLMultiSelectDropdownElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
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
    interface IntrinsicElements {
        "app-root": AppRoot;
        "multi-select-dropdown": MultiSelectDropdown;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "multi-select-dropdown": LocalJSX.MultiSelectDropdown & JSXBase.HTMLAttributes<HTMLMultiSelectDropdownElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
