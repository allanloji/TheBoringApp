import { connect } from 'react-redux';
import ActivityDetail from "../components/activity/ActivityDetail/ActivityDetail";

function mapStateToProps(state) {
    return {
        activity: state.activity // gives our component access to state through props.toDoApp
    }
}



export default connect(
    mapStateToProps
)(ActivityDetail);