export default TimeGridHeader;
declare class TimeGridHeader {
    handleHeaderClick: (date: any, view: any, e: any) => void;
    renderHeaderCells(range: any): any;
    renderRow: (resource: any) => JSX.Element;
    render(): JSX.Element;
}
declare namespace TimeGridHeader {
    namespace propTypes {
        let range: any;
        let events: any;
        let resources: any;
        let getNow: any;
        let isOverflowing: any;
        let rtl: any;
        let resizable: any;
        let width: any;
        let localizer: any;
        let accessors: any;
        let components: any;
        let getters: any;
        let selected: any;
        let selectable: any;
        let longPressThreshold: any;
        let allDayMaxRows: any;
        let onSelectSlot: any;
        let onSelectEvent: any;
        let onDoubleClickEvent: any;
        let onKeyPressEvent: any;
        let onDrillDown: any;
        let onShowMore: any;
        let getDrilldownView: any;
        let scrollRef: any;
    }
}
