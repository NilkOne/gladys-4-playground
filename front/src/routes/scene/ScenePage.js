import { connect } from 'unistore/preact';
import actions from '../../actions/scenes';
import SceneList from './ScenesList';
import SceneEdit from './SceneEdit';

const ScenePage = connect('currentUrl', actions)(
  ({ currentUrl }) => (<div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        {currentUrl.includes('/scene/edit/') ? (
          <SceneEdit />
        ) : (
          <SceneList />
        )}
      </div>
    </div>
  </div>
  ));

export default ScenePage;