import {connect} from 'react-redux';
import Counter from '../components/Counter';
import * as actions from '../actions';


// Map Redux state to component props (load states from store and map to props)
mapStateToProps = (state) => {
  return {
    count: state.CountReducer.count,
    wish_value: state.CountReducer.wish_value
  }
}

// Map Redux actions to component props (sends actions to reducers)
mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(actions.increaseTodo()),
    onUpdateClick: event => dispatch((
      actions.updateTodo(event.target.value)
    ))
  }
}

// Connected component
const VisibleCounter = connect (
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default VisibleCounter;