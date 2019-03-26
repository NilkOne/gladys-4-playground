import scenesConfig from '../config/scenes';
import { route } from 'preact-router';

const actions = store => ({
  getScenes(state) {
    const scenes = scenesConfig[state.user.language].scenes;
    store.setState({
      scenes,
      totalSize: scenesConfig[state.user.language].totalSize
    });
  },
  search (state, e) {
    let scenes = scenesConfig[state.user.language].scenes;
    if (!e.target.value || e.target.value === '') {
      scenes = scenesConfig[state.user.language].scenes;
    }
    store.setState({
      scenes: scenes.filter(scene => scene.selector.toLowerCase().includes(e.target.value.toLowerCase())),
      totalSize: scenes.lenght
    });
  },
  play(state) {},
  edit(state, scene) {
    const name = scene.name.replace(/[^A-Z0-9]/ig, '_').toLowerCase();
    store.setState({
      sceneEditing: scene
    });
    route(`/dashboard/scene/edit/${name}`);
  },
  remove (state, scene) {
    const scenes = state.scenes.filter(s => s.selector !== scene.selector);
    store.setState({
      scenes,
      totalSize: scenes.lenght
    });
  }
});

export default actions;