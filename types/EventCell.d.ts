export default EventCell;
declare class EventCell {
    render(): JSX.Element;
}
declare namespace EventCell {
    namespace propTypes {
        let event: any;
        let slotStart: any;
        let slotEnd: any;
        let resizable: any;
        let selected: any;
        let isAllDay: any;
        let continuesPrior: any;
        let continuesAfter: any;
        let accessors: any;
        let components: any;
        let getters: any;
        let localizer: any;
        let onSelect: any;
        let onDoubleClick: any;
        let onKeyPress: any;
    }
}
