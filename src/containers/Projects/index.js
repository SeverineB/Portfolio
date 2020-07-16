import { connect } from 'react-redux';

import Projects from 'src/components/Projects';

const mapStateToProps = (state) => ({
  projets: state.projets,
  isShown: state.isShown,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
