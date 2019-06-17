import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';
import SonosPage from './Sonos';
import integrationConfig from '../../../../config/integrations';

@connect(
  'user',
  actions
)
class SonoIntegration extends Component {
  componentWillMount() {}

  render({ user, getDevices, devices }, {}) {
    return (
      <SonosPage
        integration={integrationConfig[user.language].sonos}
        getDevices={getDevices}
        devices={devices}
      />
    );
  }
}

export default SonoIntegration;
