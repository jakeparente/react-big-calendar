export default Day;
declare class Day {
    render(): JSX.Element;
}
declare namespace Day {
    namespace propTypes {
        export let date: any;
        export let events: any;
        export let backgroundEvents: any;
        export let resources: any;
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
        export let onDoubleClickEvent: any;
        export let onKeyPressEvent: any;
        export let onShowMore: any;
        export let onDrillDown: any;
        export let getDrilldownView: any;
        export { DayLayoutAlgorithmPropType as dayLayoutAlgorithm };
        export let showAllEvents: any;
        export let doShowMoreDrillDown: any;
        export let popup: any;
        export let handleDragStart: any;
        export let popupOffset: any;
    }
    function range(date: any, { localizer }: {
        localizer: any;
    }): any[];
    function navigate(date: any, action: any, { localizer }: {
        localizer: any;
    }): any;
    function title(date: any, { localizer }: {
        localizer: any;
    }): any;
}
import { DayLayoutAlgorithmPropType } from './utils/propTypes';
