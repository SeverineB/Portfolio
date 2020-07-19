import { connect } from 'react-redux';

import App from 'src/components/App';

import { showButton, hideButton } from '../../actions';

const mapStateToProps = (state) => ({
  buttonShown: state.buttonShown,
});

const mapDispatchToProps = (dispatch) => ({
  showButton: () => {
    const action = showButton();
    dispatch(action);
  },
  hideButton: () => {
    const action = hideButton();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
