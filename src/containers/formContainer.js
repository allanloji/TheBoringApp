import { connect } from 'react-redux';
import Form from "../components/Form/Form";
import {colorChange, filterActivity, randomActivity} from "../redux/modules/activity";

function mapStateToProps(state) {
    return {
        activity: state.activity,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        colorChange: (value) => dispatch(colorChange(value)),
        filterActivity: (filter) => dispatch(filterActivity(filter)),
        randomActivity: () => dispatch(randomActivity())

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);