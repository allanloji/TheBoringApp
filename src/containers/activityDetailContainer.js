import { connect } from 'react-redux';
import ActivityDetail from "../components/activity/ActivityDetail/ActivityDetail";

function mapStateToProps(state) {
    return {
        activity: state.activity
    }
}

export default connect(
    mapStateToProps
)(ActivityDetail);