/// <reference path="libts.d.ts" />
declare module mtsui {
    class Component extends ts.ui.View {
        private dom;
        constructor(template: any);
        public add(component: Component): void;
        public remove(component: Component): void;
        public clear(): void;
        public getDom(): HTMLElement;
    }
}
declare module mtsui {
    class Header extends ts.ui.View {
        private right;
        private middle;
        private left;
        constructor(left?: mtsui.Component, middle?: mtsui.Component, right?: mtsui.Component);
        public setLeft(comp: mtsui.Component): void;
        public setMiddle(comp: mtsui.Component): void;
        public setRight(comp: mtsui.Component): void;
        public getLeft(): mtsui.Component;
        public getMiddle(): mtsui.Component;
        public getRight(): mtsui.Component;
    }
}
declare module mtsui {
    class Page extends mtsui.Component {
        private title;
        private window;
        private header;
        private body;
        private div;
        constructor(window: mtsui.Window, title?: String);
        public getWindow(): mtsui.Window;
        public addHeader(header: mtsui.Header): void;
        public getHeader(): mtsui.Header;
        public getDom(): HTMLElement;
    }
}
declare module mtsui {
    class WindowManager {
        private static windowStack;
        private static open(window);
        static openFullscreen(window: mtsui.Window): void;
        static openModal(window: mtsui.Window, closable: boolean): void;
        static closeWindow(window: mtsui.Window): void;
        static close(): void;
    }
}
declare module mtsui {
    class Window extends ts.ui.View {
        private pageStack;
        constructor(title?: String);
        public getActualPage(): mtsui.Page;
        public deleteStack(): void;
        public close(): void;
        public deinit(): void;
        public navigateTo(page: mtsui.Page, transitiontype?: String): void;
        public back(): void;
    }
}
declare module mtsui {
    class Popup extends mtsui.Window {
        constructor(closable: boolean, title?: String, component?: mtsui.Component);
    }
}
declare module mtsui {
    class AlertBox extends mtsui.Popup {
        constructor(title?: String, text?: String, callback?: Function);
    }
}
declare module mtsui {
    class Icon extends mtsui.Component {
        private icon;
        constructor(type: String);
    }
}
declare module mtsui {
    class Button extends mtsui.Component {
        private icon;
        private input;
        constructor(value: String, click_cb?: Function);
        public setType(type: string): void;
        public disable(): void;
        public enable(): void;
        public addIcon(icon_comp?: mtsui.Icon, pos?: String): void;
    }
}
declare module mtsui {
    class ListItem extends mtsui.Component {
        private value;
        private item;
        constructor(value?: any);
        public getValue(): String;
        public setOnclick(func: Function): void;
    }
    class ListItemDecorator extends ListItem {
        constructor(comp: mtsui.Component, value?: any, position?: String);
    }
    class List extends mtsui.Component {
        constructor();
        public add(listItem: ListItem): void;
        public remove(listItem: ListItem): void;
        public clear(): void;
    }
}
interface TouchEvent extends Event {
    pageX: number;
    pageY: number;
}
declare var global_window: Window;
declare module mtsui {
    class Menu {
        private static OFFSET;
        private visible;
        private menu;
        private window;
        private position;
        private slide;
        constructor(window: mtsui.Window, content: mtsui.Component, position: string, slide?: boolean);
        public deinit(): void;
        public addTo(header: mtsui.Header, icon: mtsui.Component): void;
        private toggle();
        public show(): void;
        public hide(): void;
    }
}