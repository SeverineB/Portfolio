import { connect } from 'react-redux';

import Skills from '../../components/Skills';

import { toggleOpen } from '../../actions';

const mapStateToProps = (state) => ({
  skills: state.skills,
  softs: state.softs,
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
)(Skills);
