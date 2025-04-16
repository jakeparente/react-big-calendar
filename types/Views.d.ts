export default VIEWS;
declare const VIEWS: {
    [views.MONTH]: typeof Month;
    [views.WEEK]: typeof Week;
    [views.WORK_WEEK]: typeof WorkWeek;
    [views.DAY]: typeof Day;
    [views.AGENDA]: typeof Agenda;
};
import { views } from './utils/constants';
import Month from './Month';
import Week from './Week';
import WorkWeek from './WorkWeek';
import Day from './Day';
import Agenda from './Agenda';
