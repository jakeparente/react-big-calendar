export function isSelected(event: any, selected: any): any;
export function slotWidth(rowBox: any, slots: any): number;
export function getSlotAtX(rowBox: any, x: any, rtl: any, slots: any): number;
export function pointInBox(box: any, { x, y }: {
    x: any;
    y: any;
}): boolean;
export function dateCellSelection(start: any, rowBox: any, box: any, slots: any, rtl: any): {
    startIdx: number;
    endIdx: number;
};
