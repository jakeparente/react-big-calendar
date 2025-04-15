export default MonthView;
declare class MonthView {
    static getDerivedStateFromProps({ date, localizer }: {
        date: any;
        localizer: any;
    }, state: any): {
        date: any;
        needLimitMeasure: any;
    };
    constructor(...args: any[]);
    state: {
        rowLimit: number;
        needLimitMeasure: boolean;
        date: any;
    };
    containerRef: import("react").RefObject<any>;
    slotRowRef: import("react").RefObject<any>;
    _bgRows: any[];
    _pendingSelection: any[];
    componentDidMount(): void;
    _resizeListener: () => void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getContainer: () => any;
    render(): JSX.Element;
    _weekCount: any;
    renderWeek: (week: any, weekIdx: any) => JSX.Element;
    readerDateHeading: ({ date, className, ...props }: {
        [x: string]: any;
        date: any;
        className: any;
    }) => JSX.Element;
    renderHeaders(row: any): any;
    renderOverlay(): JSX.Element;
    measureRowLimit(): void;
    handleSelectSlot: (range: any, slotInfo: any) => void;
    _selectTimer: NodeJS.Timeout;
    handleHeadingClick: (date: any, view: any, e: any) => void;
    handleSelectEvent: (...args: any[]) => void;
    handleDoubleClickEvent: (...args: any[]) => void;
    handleKeyPressEvent: (...args: any[]) => void;
    handleShowMore: (events: any, date: any, cell: any, slot: any, target: any) => void;
    overlayDisplay: () => void;
    selectDates(slotInfo: any): void;
    clearSelection(): void;
}
declare namespace MonthView {
    namespace propTypes {
        let events: any;
        let date: any;
        let min: any;
        let max: any;
        let step: any;
        let getNow: any;
        let scrollToTime: any;
        let enableAutoScroll: any;
        let rtl: any;
        let resizable: any;
        let width: any;
        let accessors: any;
        let components: any;
        let getters: any;
        let localizer: any;
        let selected: any;
        let selectable: any;
        let longPressThreshold: any;
        let onNavigate: any;
        let onSelectSlot: any;
        let onSelectEvent: any;
        let onDoubleClickEvent: any;
        let onKeyPressEvent: any;
        let onShowMore: any;
        let showAllEvents: any;
        let doShowMoreDrillDown: any;
        let onDrillDown: any;
        let getDrilldownView: any;
        let popup: any;
        let handleDragStart: any;
        let workdaysOnly: any;
        let popupOffset: any;
    }
    function range(date: any, { localizer }: {
        localizer: any;
    }): {
        start: any;
        end: any;
    };
    function navigate(date: any, action: any, { localizer }: {
        localizer: any;
    }): any;
    function title(date: any, { localizer }: {
        localizer: any;
    }): any;
}
