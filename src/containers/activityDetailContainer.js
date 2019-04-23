import { connect } from 'react-redux';
import ActivityDetail from "../components/Activity/ActivityDetail/ActivityDetail";

function mapStateToProps(state) {
    return {
        activity: state.activity
    }
}

export default connect(
    mapStateToProps
)(ActivityDetail);