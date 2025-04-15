export default Agenda;
declare function Agenda({ accessors, components, date, events, getters, length, localizer, onDoubleClickEvent, onSelectEvent, selected, }: {
    accessors: any;
    components: any;
    date: any;
    events: any;
    getters: any;
    length?: number;
    localizer: any;
    onDoubleClickEvent: any;
    onSelectEvent: any;
    selected: any;
}): JSX.Element;
declare namespace Agenda {
    namespace propTypes {
        let accessors: any;
        let components: any;
        let date: any;
        let events: any;
        let getters: any;
        let length: any;
        let localizer: any;
        let onSelectEvent: any;
        let onDoubleClickEvent: any;
        let selected: any;
    }
    function range(start: any, { length, localizer }: {
        length?: number;
        localizer: any;
    }): {
        start: any;
        end: any;
    };
    function navigate(date: any, action: any, { length, localizer }: {
        length?: number;
        localizer: any;
    }): any;
    function title(start: any, { length, localizer }: {
        length?: number;
        localizer: any;
    }): any;
}
