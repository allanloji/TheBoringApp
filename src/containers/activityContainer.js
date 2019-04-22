import { connect } from 'react-redux';
import ActivityScreen from '../components/activity/ActivityScreen';
import {
    colorChange
} from "../redux/modules/activity";

function mapStateToProps(state) {
    return {
        activity: state.activity // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        colorChange: (value) => dispatch(colorChange(value))
    }; // here we'll soon be mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityScreen);