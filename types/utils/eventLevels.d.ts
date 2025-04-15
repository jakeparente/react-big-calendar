export function endOfRange({ dateRange, unit, localizer }: {
    dateRange: any;
    unit?: string;
    localizer: any;
}): {
    first: any;
    last: any;
};
export function eventSegments(event: any, range: any, accessors: any, localizer: any): {
    event: any;
    span: any;
    left: any;
    right: number;
};
export function eventLevels(rowSegments: any, limit?: number): {
    levels: any[][];
    extra: any[];
};
export function inRange(e: any, start: any, end: any, accessors: any, localizer: any): any;
export function segsOverlap(seg: any, otherSegs: any): any;
export function sortWeekEvents(events: any, accessors: any, localizer: any): any[];
export function sortEvents(eventA: any, eventB: any, accessors: any, localizer: any): any;
