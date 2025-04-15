export default DateContentRow;
declare class DateContentRow {
    constructor(...args: any[]);
    containerRef: import("react").RefObject<any>;
    headingRowRef: import("react").RefObject<any>;
    eventRowRef: import("react").RefObject<any>;
    slotMetrics: import("memoize-one").MemoizedFn<(this: any, options: any) => {
        first: any;
        last: any;
        levels: any[][];
        extra: any[];
        range: any;
        slots: any;
        clone(args: any): any;
        getDateForSlot(slotNumber: any): any;
        getSlotForDate(date: any): any;
        getEventsForSlot(slot: any): any;
        continuesPrior(event: any): any;
        continuesAfter(event: any): any;
    }>;
    handleSelectSlot: (slot: any) => void;
    handleShowMore: (slot: any, target: any) => void;
    getContainer: () => any;
    getRowLimit(): number;
    renderHeadingCell: (date: any, index: any) => any;
    renderDummy: () => JSX.Element;
    render(): JSX.Element;
}
declare namespace DateContentRow {
    namespace propTypes {
        let date: any;
        let events: any;
        let range: any;
        let rtl: any;
        let resizable: any;
        let resourceId: any;
        let renderForMeasure: any;
        let renderHeader: any;
        let container: any;
        let selected: any;
        let selectable: any;
        let longPressThreshold: any;
        let onShowMore: any;
        let showAllEvents: any;
        let onSelectSlot: any;
        let onSelect: any;
        let onSelectEnd: any;
        let onSelectStart: any;
        let onDoubleClick: any;
        let onKeyPress: any;
        let dayPropGetter: any;
        let getNow: any;
        let isAllDay: any;
        let accessors: any;
        let components: any;
        let getters: any;
        let localizer: any;
        let minRows: any;
        let maxRows: any;
    }
    namespace defaultProps {
        let minRows_1: number;
        export { minRows_1 as minRows };
        let maxRows_1: number;
        export { maxRows_1 as maxRows };
    }
}
