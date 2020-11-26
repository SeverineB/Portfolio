import { connect } from 'react-redux';

import Projects from 'src/components/Projects';

const mapStateToProps = (state) => ({
  projetspersos: state.projetspersos,
  projetsformation: state.projetsformation,
  isShown: state.isShown,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
