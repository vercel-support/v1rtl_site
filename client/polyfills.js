import { ResizeObserver as Polyfill } from '@juggle/resize-observer'

window.ResizeObserver = window.ResizeObserver || Polyfill
