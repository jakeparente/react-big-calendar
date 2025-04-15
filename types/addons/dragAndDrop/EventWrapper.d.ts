export default EventWrapper;
declare class EventWrapper {
    static contextType: any;
    static propTypes: {
        type: any;
        event: any;
        draggable: any;
        allDay: any;
        isRow: any;
        continuesPrior: any;
        continuesAfter: any;
        isDragging: any;
        isResizing: any;
        resource: any;
        resizable: any;
    };
    handleResizeUp: (e: any) => void;
    handleResizeDown: (e: any) => void;
    handleResizeLeft: (e: any) => void;
    handleResizeRight: (e: any) => void;
    handleStartDragging: (e: any) => void;
    renderAnchor(direction: any): JSX.Element;
    render(): any;
}
