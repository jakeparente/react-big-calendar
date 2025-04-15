declare class TimeGrid extends Component<any, any, any> {
    constructor(props: any);
    state: {
        gutterWidth: any;
        isOverflowing: any;
    };
    scrollRef: any;
    contentRef: any;
    containerRef: any;
    _scrollRatio: number;
    gutterRef: import("react").RefObject<any>;
    getSnapshotBeforeUpdate(): any;
    componentDidMount(): void;
    handleScroll: (e: any) => void;
    handleResize: () => void;
    rafHandle: number;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    handleKeyPressEvent: (...args: any[]) => void;
    handleSelectEvent: (...args: any[]) => void;
    handleDoubleClickEvent: (...args: any[]) => void;
    handleShowMore: (events: any, date: any, cell: any, slot: any, target: any) => void;
    handleSelectAllDaySlot: (slots: any, slotInfo: any) => void;
    renderDayColumn(date: any, id: any, resource: any, groupedEvents: any, groupedBackgroundEvents: any, localizer: any, accessors: any, components: any, dayLayoutAlgorithm: any, now: any): JSX.Element;
    renderResourcesFirst(range: any, resources: any, groupedEvents: any, groupedBackgroundEvents: any, localizer: any, accessors: any, now: any, components: any, dayLayoutAlgorithm: any): any;
    renderRangeFirst(range: any, resources: any, groupedEvents: any, groupedBackgroundEvents: any, localizer: any, accessors: any, now: any, components: any, dayLayoutAlgorithm: any): any;
    renderEvents(range: any, events: any, backgroundEvents: any, now: any): any;
    render(): JSX.Element;
    slots: any;
    renderOverlay(): JSX.Element;
    overlayDisplay: () => void;
    clearSelection(): void;
    _pendingSelection: any[];
    measureGutter(): void;
    measureGutterAnimationFrameRequest: number;
    applyScroll(): void;
    calculateScroll(props?: Readonly<any>): void;
    checkOverflow: () => void;
    _updatingOverflow: boolean;
    memoizedResources: import("memoize-one").MemoizedFn<(this: any, resources: any, accessors: any) => {
        map(fn: any): any;
        groupEvents(events: any): Map<any, any>;
    }>;
}
declare namespace TimeGrid {
    namespace propTypes {
        export let events: any;
        export let backgroundEvents: any;
        export let resources: any;
        export let resourceGroupingLayout: any;
        export let step: any;
        export let timeslots: any;
        export let range: any;
        export let min: any;
        export let max: any;
        export let getNow: any;
        export let scrollToTime: any;
        export let enableAutoScroll: any;
        export let showMultiDayTimes: any;
        export let rtl: any;
        export let resizable: any;
        export let width: any;
        export let accessors: any;
        export let components: any;
        export let getters: any;
        export let localizer: any;
        export let allDayMaxRows: any;
        export let selected: any;
        export let selectable: any;
        export let longPressThreshold: any;
        export let onNavigate: any;
        export let onSelectSlot: any;
        export let onSelectEnd: any;
        export let onSelectStart: any;
        export let onSelectEvent: any;
        export let onShowMore: any;
        export let onDoubleClickEvent: any;
        export let onKeyPressEvent: any;
        export let onDrillDown: any;
        export let getDrilldownView: any;
        export { DayLayoutAlgorithmPropType as dayLayoutAlgorithm };
        export let showAllEvents: any;
        export let doShowMoreDrillDown: any;
        export let popup: any;
        export let handleDragStart: any;
        export let popupOffset: any;
    }
    namespace defaultProps {
        let step_1: number;
        export { step_1 as step };
        let timeslots_1: number;
        export { timeslots_1 as timeslots };
        let resourceGroupingLayout_1: boolean;
        export { resourceGroupingLayout_1 as resourceGroupingLayout };
    }
}
export default TimeGrid;
import { Component } from 'react';
import { DayLayoutAlgorithmPropType } from './utils/propTypes';
