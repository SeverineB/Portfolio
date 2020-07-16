import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

const mapStateToProps = (state) => ({
  email: state.email,
  phone: state.phone,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
