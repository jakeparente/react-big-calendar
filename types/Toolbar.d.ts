export default Toolbar;
declare class Toolbar {
    render(): JSX.Element;
    navigate: (action: any) => void;
    view: (view: any) => void;
    viewNamesGroup(messages: any): any;
}
declare namespace Toolbar {
    namespace propTypes {
        let view: any;
        let views: any;
        let label: any;
        let localizer: any;
        let onNavigate: any;
        let onView: any;
    }
}
