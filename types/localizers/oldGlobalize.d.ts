export default function _default(globalize: any): DateLocalizer;
export namespace formats {
    export let dateFormat: string;
    export let dayFormat: string;
    export let weekdayFormat: string;
    export { timeRangeFormat as selectRangeFormat };
    export { timeRangeFormat as eventTimeRangeFormat };
    export { timeRangeStartFormat as eventTimeRangeStartFormat };
    export { timeRangeEndFormat as eventTimeRangeEndFormat };
    export let timeGutterFormat: string;
    export let monthHeaderFormat: string;
    export let dayHeaderFormat: string;
    export { weekRangeFormat as dayRangeHeaderFormat };
    export { dateRangeFormat as agendaHeaderFormat };
    export let agendaDateFormat: string;
    export let agendaTimeFormat: string;
    export { timeRangeFormat as agendaTimeRangeFormat };
}
import { DateLocalizer } from '../localizer';
declare function timeRangeFormat({ start, end }: {
    start: any;
    end: any;
}, culture: any, local: any): string;
declare function timeRangeStartFormat({ start }: {
    start: any;
}, culture: any, local: any): string;
declare function timeRangeEndFormat({ end }: {
    end: any;
}, culture: any, local: any): string;
declare function weekRangeFormat({ start, end }: {
    start: any;
    end: any;
}, culture: any, local: any): string;
declare function dateRangeFormat({ start, end }: {
    start: any;
    end: any;
}, culture: any, local: any): string;
export {};
