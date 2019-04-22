import { connect } from 'react-redux';
import Form from "../components/Form/Form";


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
)(Form);