import Navigation from './presentation';

import { connect } from 'react-redux';

<<<<<<< HEAD
import {  } from '../../services/calendar';

const mapStateToProps = state => ({});
=======
import { calendarSetMonth } from '../../redux/calendar/actions'
>>>>>>> feature/#1

import { getNextMonth, getPreviousMonth } from '../../services/calendar'

const mapStateToProps = ({ calendar }) => ({ calendar });

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month))
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    setNextMonth: () => {
        const nextMonth =getNextMonth(stateProps.calendar)
        dispatchProps.setMonth(nextMonth)
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar)
        dispatchProps.setMonth(previousMonth)
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);