export default BackgroundCells;
declare class BackgroundCells {
    constructor(props: any, context: any);
    state: {
        selecting: boolean;
    };
    containerRef: import("react").RefObject<any>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
    _selectable(): void;
    _selector: Selection;
    _initial: {
        x?: undefined;
        y?: undefined;
    } | {
        x: any;
        y: any;
    } | {
        x?: undefined;
        y?: undefined;
    };
    _teardownSelectable(): void;
    _selectSlot({ endIdx, startIdx, action, bounds, box }: {
        endIdx: any;
        startIdx: any;
        action: any;
        bounds: any;
        box: any;
    }): void;
}
declare namespace BackgroundCells {
    namespace propTypes {
        let date: any;
        let getNow: any;
        let getters: any;
        let components: any;
        let container: any;
        let dayPropGetter: any;
        let selectable: any;
        let longPressThreshold: any;
        let onSelectSlot: any;
        let onSelectEnd: any;
        let onSelectStart: any;
        let range: any;
        let rtl: any;
        let type: any;
        let resourceId: any;
        let localizer: any;
    }
}
import Selection from './Selection';
