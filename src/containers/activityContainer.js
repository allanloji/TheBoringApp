import { connect } from 'react-redux';
import ActivityScreen from '../components/Activity/ActivityScreen';
import {
    colorChange,
    fetchActivity,
} from "../redux/modules/activity";

function mapStateToProps(state) {
    return {
        activity: state.activity,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        colorChange: (value) => dispatch(colorChange(value)),
        fetchActivity: (query) => dispatch(fetchActivity(query)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityScreen);