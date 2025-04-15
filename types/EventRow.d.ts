export default EventRow;
declare class EventRow {
    render(): JSX.Element;
}
declare namespace EventRow {
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
    };
    let defaultProps: {
        segments: any[];
        selected: {};
    };
}
