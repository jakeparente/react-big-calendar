export default EventContainerWrapper;
declare class EventContainerWrapper {
    static propTypes: {
        accessors: any;
        components: any;
        getters: any;
        localizer: any;
        slotMetrics: any;
        resource: any;
    };
    static contextType: any;
    constructor(...args: any[]);
    state: {};
    ref: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    reset(): void;
    update(event: any, { startDate, endDate, top, height }: {
        startDate: any;
        endDate: any;
        top: any;
        height: any;
    }): void;
    handleMove: (point: any, bounds: any) => void;
    handleResize(point: any, bounds: any): void;
    handleDropFromOutside: (point: any, boundaryBox: any) => void;
    handleDragOverFromOutside: (point: any, bounds: any) => void;
    _calculateDnDEnd: (start: any) => any;
    updateParentScroll: (parent: any, node: any) => void;
    _selectable: () => void;
    _selector: Selection;
    eventOffsetTop: number;
    handleInteractionEnd: () => void;
    _teardownSelectable: () => void;
    renderContent(): any;
    render(): JSX.Element;
}
import Selection from '../../Selection';
