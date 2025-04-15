export default WeekWrapper;
declare class WeekWrapper {
    static propTypes: {
        isAllDay: any;
        slotMetrics: any;
        accessors: any;
        getters: any;
        components: any;
        resourceId: any;
        rtl: any;
        localizer: any;
    };
    static contextType: any;
    constructor(...args: any[]);
    state: {};
    ref: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    reset(): void;
    update(event: any, start: any, end: any): void;
    handleMove: (point: any, bounds: any, draggedEvent: any) => void;
    handleDropFromOutside: (point: any, bounds: any) => void;
    handleDragOverFromOutside: (point: any, node: any) => void;
    handleResize(point: any, bounds: any): void;
    _selectable: () => void;
    _selector: Selection;
    handleInteractionEnd: () => void;
    _teardownSelectable: () => void;
    render(): JSX.Element;
}
import Selection from '../../Selection';
