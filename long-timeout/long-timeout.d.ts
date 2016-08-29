// Type definitions for long-timeout 0.1.1
// Project: https://www.npmjs.com/package/long-timeout
// Definitions by: Ludvig Janiuk https://github.com/LudwikJaniuk
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace lt {
  export interface Timeout {}
  export interface Interval {}
  function setTimeout(listener: CallbackFunction, after: number): Timeout;
  function setInterval (listener: CallbackFunction, after: number): Interval;
  function clearTimeout (timer: Timeout): void;
  function clearInterval (timer: Interval): void;
}

declare module "long-timeout" {
  export = lt;
}

type CallbackFunction = () => any
