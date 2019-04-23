import { connect } from 'react-redux';
import FavoritesScreen from '../components/Favorites/FavoritesScreen';
import {deleteFavorite} from "../redux/modules/favorites";


function mapStateToProps(state) {
    return {
        activity: state.activity,
        favorites: state.favorites,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteFavorite: (index) => dispatch(deleteFavorite(index))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesScreen);