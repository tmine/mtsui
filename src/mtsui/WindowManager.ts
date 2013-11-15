/// <reference path="../ts/util/Stack.ts"/>
/// <reference path="Window.ts"/>

module mtsui {
    export class WindowManager {
        private static windowStack: tsc.util.Stack<Window> = new tsc.util.Stack<Window>();

        private static open(window: Window): void {
            // hide other window if exist
            var old: Window = WindowManager.windowStack.pop();
            if (old) {
                old.getDom().className += " hide";

                WindowManager.windowStack.push(old);
            }

            // Add new window to stack
            WindowManager.windowStack.push(window);
            // Append new window to body
            document.body.appendChild(window.getDom());
        }

        public static openFullscreen(window: Window) {
            window.getDom().className += " fullscreen";
            WindowManager.open(window);
        }

        public static openModal(window: Window, closable: boolean) {
            var temp: Window = new Window();

            temp.getDom().className += " modal";
            temp.getDom().appendChild(window.getDom());

            if(closable){
                temp.getDom().onclick = function() {
                    WindowManager.close();
                }
            }

			window.getDom().onclick = function() {
                if (event.stopPropagation) event.stopPropagation()
				if (event) event.cancelBubble = true;
            }

			WindowManager.open(temp);
        }

        public static close(): void {
            var window: Window = WindowManager.windowStack.pop();
            // Remove window from body
            document.body.removeChild(window.getDom());

            var window: Window = WindowManager.windowStack.pop();
            window.getDom().className = window.getDom().className.replace(" hide", "");
            WindowManager.windowStack.push(window);
        }

    }
}