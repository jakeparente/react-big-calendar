export function getEventNodeFromPoint(node: any, { clientX, clientY }: {
    clientX: any;
    clientY: any;
}): Element;
export function getShowMoreNodeFromPoint(node: any, { clientX, clientY }: {
    clientX: any;
    clientY: any;
}): Element;
export function isEvent(node: any, bounds: any): boolean;
export function isShowMore(node: any, bounds: any): boolean;
/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */
export function objectsCollide(nodeA: any, nodeB: any, tolerance?: number): bool;
/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
export function getBoundsForNode(node: HTMLElement): any;
export default Selection;
declare class Selection {
    constructor(node: any, { global, longPressThreshold, validContainers }?: {
        global?: boolean;
        longPressThreshold?: number;
        validContainers?: any[];
    });
    _initialEvent: any;
    selecting: boolean;
    isDetached: boolean;
    container: any;
    globalMouse: boolean;
    longPressThreshold: number;
    validContainers: any[];
    _listeners: any;
    _handleInitialEvent(e: any): void;
    _handleMoveEvent(e: any): void;
    _handleTerminatingEvent(e: any): undefined;
    _keyListener(e: any): void;
    _dropFromOutsideListener(e: any): void;
    _dragOverFromOutsideListener(e: any): void;
    _removeTouchMoveWindowListener: () => void;
    _removeKeyDownListener: () => void;
    _removeKeyUpListener: () => void;
    _removeDropFromOutsideListener: () => void;
    _removeDragOverFromOutsideListener: () => void;
    on(type: any, handler: any): {
        remove(): void;
    };
    emit(type: any, ...args: any[]): undefined;
    teardown(): void;
    _initialEventData: {
        isTouch: boolean;
        x: any;
        y: any;
        clientX: any;
        clientY: any;
    };
    _selectRect: {
        top: number;
        left: number;
        x: any;
        y: any;
        right: number;
        bottom: number;
    };
    _lastClickData: {
        timestamp: number;
    };
    isSelected(node: any): any;
    filter(items: any): any;
    _addLongPressListener(handler: any, initialEvent: any): () => void;
    _addInitialEventListener(): void;
    _removeInitialEventListener: (() => void) | (() => void) | (() => void);
    _removeEndListener: () => void;
    _onEscListener: () => void;
    _removeMoveListener: () => void;
    _isWithinValidContainer(e: any): boolean;
    _handleClickEvent(e: any): undefined;
    ctrl: any;
    isClick(pageX: any, pageY: any): boolean;
}
