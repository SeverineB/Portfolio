import { connect } from 'react-redux';

import Contactmenu from '../../components/ContactMenu';
import { toggleContactMenu, closeContactMenu } from '../../actions';

const mapStateToProps = (state) => ({
  menuOpen: state.menuOpen,
});
const mapDispatchToProps = (dispatch) => ({
  toggleContactMenu: () => {
    const action = toggleContactMenu();
    dispatch(action);
  },
  closeContactMenu: () => {
    const action = closeContactMenu();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contactmenu);
