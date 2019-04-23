import { connect } from 'react-redux';
import FavoritesScreen from '../components/Favorites/FavoritesScreen';


function mapStateToProps(state) {
    return {
        activity: state.activity,
        favorites: state.favorites,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(FavoritesScreen);