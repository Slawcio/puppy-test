export {};
declare global {
    namespace WebdriverIO {
        interface Element {
            elementCustomCommand: (arg: any) => number
        }
    }
}