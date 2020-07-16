import { connect } from 'react-redux';

import SideMenu from '../../components/SideMenu';
import { toggleOpen, closeMenu } from '../../actions';

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu);
