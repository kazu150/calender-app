import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/count/actions';

import Counter from "./presentation";

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = dispatch => ({
    increment: count => {
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// presentationalとcontainerの２つでセットということかな