import { connect } from 'react-redux';

import About from 'src/components/About';

const mapStateToProps = (state) => ({
  infos: state.infos,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
