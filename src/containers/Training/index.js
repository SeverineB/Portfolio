import { connect } from 'react-redux';

import Training from '../../components/Training';

const mapStateToProps = (state) => ({
  trainingList: state.trainingList,
  training: state.training,
});
const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Training);
