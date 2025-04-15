export default DayColumn;
declare class DayColumn {
    constructor(...args: any[]);
    state: {
        selecting: boolean;
        timeIndicatorPosition: any;
    };
    intervalTriggered: boolean;
    slotMetrics: {
        groups: any[];
        update(args: any): any;
        dateIsInGroup(date: any, groupIndex: any): any;
        nextSlot(slot: any): any;
        closestSlotToPosition(percent: any): any;
        closestSlotFromPoint(point: any, boundaryRect: any): any;
        closestSlotFromDate(date: any, offset?: number): any;
        startsBeforeDay(date: any): any;
        startsAfterDay(date: any): any;
        startsBefore(date: any): any;
        startsAfter(date: any): any;
        getRange(rangeStart: any, rangeEnd: any, ignoreMin: any, ignoreMax: any): {
            top: number;
            height: number;
            start: number;
            startDate: any;
            end: number;
            endDate: any;
        };
        getCurrentTimePosition(rangeStart: any): number;
    };
    containerRef: import("react").RefObject<any>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
    setTimeIndicatorPositionUpdateInterval(tail?: boolean): void;
    _timeIndicatorTimeout: number;
    clearTimeIndicatorInterval(): void;
    positionTimeIndicator(): void;
    render(): JSX.Element;
    renderEvents: ({ events, isBackgroundEvent }: {
        events: any;
        isBackgroundEvent: any;
    }) => any;
    _selectable: () => void;
    _selector: Selection;
    _initialSlot: any;
    _teardownSelectable: () => void;
    _selectSlot: ({ startDate, endDate, action, bounds, box }: {
        startDate: any;
        endDate: any;
        action: any;
        bounds: any;
        box: any;
    }) => void;
    _select: (...args: any[]) => void;
    _doubleClick: (...args: any[]) => void;
    _keyPress: (...args: any[]) => void;
}
declare namespace DayColumn {
    namespace propTypes {
        export let events: any;
        export let backgroundEvents: any;
        export let step: any;
        export let date: any;
        export let min: any;
        export let max: any;
        export let getNow: any;
        export let isNow: any;
        export let rtl: any;
        export let resizable: any;
        export let accessors: any;
        export let components: any;
        export let getters: any;
        export let localizer: any;
        export let showMultiDayTimes: any;
        export let culture: any;
        export let timeslots: any;
        export let selected: any;
        export let selectable: any;
        export let eventOffset: any;
        export let longPressThreshold: any;
        export let onSelecting: any;
        export let onSelectSlot: any;
        export let onSelectEvent: any;
        export let onDoubleClickEvent: any;
        export let onKeyPressEvent: any;
        export let className: any;
        export let dragThroughEvents: any;
        export let resource: any;
        export { DayLayoutAlgorithmPropType as dayLayoutAlgorithm };
    }
    namespace defaultProps {
        let dragThroughEvents_1: boolean;
        export { dragThroughEvents_1 as dragThroughEvents };
        let timeslots_1: number;
        export { timeslots_1 as timeslots };
    }
}
import Selection from './Selection';
import { DayLayoutAlgorithmPropType } from './utils/propTypes';
