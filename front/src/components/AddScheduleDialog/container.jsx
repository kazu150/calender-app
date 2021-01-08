import AddScheduleDialog from './presentation';
import { connect } from 'react-redux';
import { 
    addScheduleCloseDialog,
    addScheduleSetValue,
    addScheduleStartEdit
} from '../../redux/addSchedule/actions';
import { asyncSchedulesAddItem } from '../../redux/schedules/effects';

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
        dispatch(asyncSchedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    },
    setIsEditStart: () => {
        dispatch(addScheduleStartEdit());
    }
})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
            // ↑多分、これはaddScheduleReducer内のstate構造から、schedulesReducer内の構造に変更するための処理
            // マウスホバーするとわかるが、（多分）ここで最終的に定義しているのは{}のなかのschedule。   
        } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);