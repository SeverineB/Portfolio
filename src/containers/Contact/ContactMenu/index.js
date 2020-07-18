import { connect } from 'react-redux';

import Contactmenu from '../../../components/Contact/ContactMenu';
import { toggleContactMenu } from '../../../actions';

const mapStateToProps = (state) => ({
  menuOpen: state.openMenu,
});
const mapDispatchToProps = (dispatch) => ({
  toggleContactMenu: () => {
    const action = toggleContactMenu();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contactmenu);
