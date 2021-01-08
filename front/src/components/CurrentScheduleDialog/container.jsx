import { connect } from 'react-redux';
import CurrentScheduleDialog from './presentation';

import { currentScheduleCloseDialog } from '../../redux/currentSchedule/actions';
import { asyncSchedulesDeleteItem } from '../../redux/schedules/effects';

const mapStateToProps = state => ({
    schedule: state.currentSchedule
});

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog());
    },
    deleteItem: id => {
        dispatch(asyncSchedulesDeleteItem(id));
        dispatch(currentScheduleCloseDialog());
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    deleteItem: () => {
        const { id } = stateProps.schedule.item;
        dispatchProps.deleteItem(id);
    }
})
// stateの中身を使ってdispatchを書かなきゃ聞けないときにmergePropsを使うということ？

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CurrentScheduleDialog);