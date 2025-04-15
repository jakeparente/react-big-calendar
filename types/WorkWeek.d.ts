export default WorkWeek;
declare class WorkWeek {
    render(): JSX.Element;
}
declare namespace WorkWeek {
    export namespace propTypes {
        let date: any;
        let localizer: any;
        let min: any;
        let max: any;
        let scrollToTime: any;
        let enableAutoScroll: any;
    }
    export let defaultProps: {
        step: number;
        timeslots: number;
        resourceGroupingLayout: boolean;
    };
    export { workWeekRange as range };
    export let navigate: (date: any, action: any, { localizer }: {
        localizer: any;
    }) => any;
    export function title(date: any, { localizer }: {
        localizer: any;
    }): any;
}
declare function workWeekRange(date: any, options: any): any;
