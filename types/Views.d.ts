export default VIEWS;
declare const VIEWS: {
    [x: string]: typeof Agenda | typeof Month | typeof Day | typeof WorkWeek;
};
import Agenda from './Agenda';
import Month from './Month';
import Day from './Day';
import WorkWeek from './WorkWeek';
