export default EventEndingRow;
declare class EventEndingRow {
    render(): JSX.Element;
    canRenderSlotEvent(slot: any, span: any): any;
    renderShowMore(segments: any, slot: any): false | JSX.Element;
    showMore(slot: any, e: any): void;
}
declare namespace EventEndingRow {
    let propTypes: {
        slotMetrics: any;
        selected: any;
        isAllDay: any;
        accessors: any;
        localizer: any;
        components: any;
        getters: any;
        onSelect: any;
        onDoubleClick: any;
        onKeyPress: any;
        segments: any;
        slots: any;
        onShowMore: any;
    };
    let defaultProps: {
        segments: any[];
        selected: {};
    };
}
