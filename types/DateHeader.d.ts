export default DateHeader;
declare function DateHeader({ label, drilldownView, onDrillDown }: {
    label: any;
    drilldownView: any;
    onDrillDown: any;
}): JSX.Element;
declare namespace DateHeader {
    namespace propTypes {
        let label: any;
        let date: any;
        let drilldownView: any;
        let onDrillDown: any;
        let isOffRange: any;
    }
}
