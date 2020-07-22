import { connect } from 'react-redux';

import SideMenu from '../../components/SideMenu';
import { toggleOpen, closeMenu, openScroll, closeScroll } from '../../actions';

const mapStateToProps = (state) => ({
  open: state.open,
});
const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    const action = toggleOpen();
    dispatch(action);
  },
  closeMenu: () => {
    const action = closeMenu();
    dispatch(action);
  },
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
)(SideMenu);
