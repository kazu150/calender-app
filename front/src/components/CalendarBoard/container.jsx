import { connect } from 'react-redux';
import CalendarBoard from './presentation';
import { createCalendar } from '../../services/calendar';



const mapStateToProps = state => ({calendar: state.calendar});

const mergeProps = stateProps => ({
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(CalendarBoard)

// mergePropsは、mapStateToPropsの結果が前回と異なっていたときにだけ実行される。
