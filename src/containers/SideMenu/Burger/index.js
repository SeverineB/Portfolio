import { connect } from 'react-redux';

import BurgerButton from '../../../components/SideMenu/Burger';

import { toggleOpen } from '../../../actions';

const mapStateToProps = (state) => ({
  open: state.open,
});
const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    const action = toggleOpen();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerButton);
