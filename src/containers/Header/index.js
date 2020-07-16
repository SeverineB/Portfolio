import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  title: state.title,
  subtitle: state.subtitle,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
