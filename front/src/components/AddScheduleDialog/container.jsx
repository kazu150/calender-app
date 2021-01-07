import AddScheduleDialog from './presentation';
import { connect } from 'react-redux';
import { 
    addScheduleCloseDialog,
    addScheduleSetValue
} from '../../redux/addSchedule/actions';
import { schedulesAddItem } from '../../redux/schedules/actions';

const mapStateToProps = state => ({
    schedule: state.addSchedule
})

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    },
    saveSchedule: schedule => {
        dispatch(schedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    }
})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
            // ↑多分、これはaddScheduleReducer内のstate構造から、schedulesReducer内の構造に変更するための処理
        } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);