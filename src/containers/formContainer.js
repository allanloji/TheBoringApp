import { connect } from 'react-redux';
import Form from "../components/Form/Form";
import {colorChange, filterActivity} from "../redux/modules/activity";


function mapStateToProps(state) {
    return {
        activity: state.activity,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        colorChange: (value) => dispatch(colorChange(value)),
        filterActivity: (filter) => dispatch(filterActivity(filter)),

    }; // here we'll soon be mapping actions to props
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);