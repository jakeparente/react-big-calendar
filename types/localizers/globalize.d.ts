export default function _default(globalize: any): DateLocalizer;
export namespace formats {
    export let dateFormat: string;
    export let dayFormat: string;
    export let weekdayFormat: string;
    export { timeRangeFormat as selectRangeFormat };
    export { timeRangeFormat as eventTimeRangeFormat };
    export { timeRangeStartFormat as eventTimeRangeStartFormat };
    export { timeRangeEndFormat as eventTimeRangeEndFormat };
    export namespace timeGutterFormat {
        let time: string;
    }
    export let monthHeaderFormat: string;
    export let dayHeaderFormat: string;
    export { weekRangeFormat as dayRangeHeaderFormat };
    export { dateRangeFormat as agendaHeaderFormat };
    export let agendaDateFormat: string;
    export namespace agendaTimeFormat {
        let time_1: string;
        export { time_1 as time };
    }
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
