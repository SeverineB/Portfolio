import { connect } from 'react-redux';

import Footer from 'src/components/Footer';

const mapStateToProps = (state) => ({
  socials: state.socials,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
