import { connect } from 'react-redux';
import ActivityDetail from "../components/Activity/ActivityDetail/ActivityDetail";
import { addFavorite} from "../redux/modules/favorites";



function mapStateToProps(state) {
    return {
        activity: state.activity
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavorite: (activity) => dispatch(addFavorite(activity)),

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityDetail);