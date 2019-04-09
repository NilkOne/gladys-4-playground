const { assert, expect } = require('chai');
const { ACTIONS } = require('../../../utils/constants');
const SceneManager = require('../../../lib/scene');

const light = {};

describe('SceneManager', () => {
  it('should create one scene', async () => {
    const sceneManager = new SceneManager(light);
    const scene = await sceneManager.create({
      name: 'My living room',
      actions: [{
        type: ACTIONS.HOUSE_ALARM.ARM,
      }],
    });
    expect(scene).to.have.property('selector', 'my-living-room');
  });
  it('should create one scene with custom selector', async () => {
    const sceneManager = new SceneManager(light);
    const scene = await sceneManager.create({
      name: 'My living room',
      selector: 'my-custom-selector',
      actions: [{
        type: ACTIONS.HOUSE_ALARM.ARM,
      }],
    });
    expect(scene).to.have.property('selector', 'my-custom-selector');
  });
  it('should return validation error', async () => {
    const sceneManager = new SceneManager(light);
    const promise = sceneManager.create({
      name: 'My living room',
      actions: [{
        type: 'THIS_DOES_NOT_EXIST',
      }],
    });
    return assert.isRejected(promise);
  });
});
