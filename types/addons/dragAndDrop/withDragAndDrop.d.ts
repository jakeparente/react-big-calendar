export default function withDragAndDrop(Calendar: any): {
    new (...args: any[]): {
        state: {
            interacting: boolean;
        };
        getDnDContextValue(): {
            draggable: {
                onStart: () => void;
                onEnd: (interactionInfo: any) => void;
                onBeginAction: (event: any, action: any, direction: any) => void;
                onDropFromOutside: any;
                dragFromOutsideItem: any;
                draggableAccessor: any;
                resizableAccessor: any;
                dragAndDropAction: {
                    interacting: boolean;
                };
            };
        };
        defaultOnDragOver: (event: any) => void;
        handleBeginAction: (event: any, action: any, direction: any) => void;
        handleInteractionStart: () => void;
        handleInteractionEnd: (interactionInfo: any) => void;
        render(): JSX.Element;
        components: {};
    };
    propTypes: any;
    defaultProps: any;
};
