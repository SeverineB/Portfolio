import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';

import { openScroll, closeScroll } from '../../actions';

const mapStateToProps = (state) => ({
  fixed: state.fixed,
  links: state.links,
});
const mapDispatchToProps = (dispatch) => ({
  openScroll: () => {
    const action = openScroll();
    dispatch(action);
  },
  closeScroll: () => {
    const action = closeScroll();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
