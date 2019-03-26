import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ScenePage from './ScenePage';
import SceneEdit from './SceneEdit';
import actions from '../../actions/scenes';
import { getCurrentUrl } from 'preact-router';

@connect(
  '',
  actions
)
class Scene extends Component {

  componentWillMount() {
    this.props.getScenes();
  }

  render({}, { }) {
    return (<ScenePage />)
  }
}

export default Scene;
 
