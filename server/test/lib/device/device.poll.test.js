const EventEmitter = require('events');
const { fake } = require('sinon');
const { assert } = require('chai');

const Device = require('../../../lib/device');

const StateManager = require('../../../lib/state');

const event = new EventEmitter();

const testService = {
  poll: fake.resolves(true),
};

describe('Device', () => {
  it('should poll device', async () => {
    const stateManager = new StateManager(event);
    const service = {
      getService: () => testService,
    };
    const device = new Device(event, {}, stateManager, service);
    await device.poll({
      service: {
        name: 'test',
      },
    });
  });
  it('should not poll device, service does not exist', async () => {
    const stateManager = new StateManager(event);
    const service = {
      getService: () => null,
    };
    const device = new Device(event, {}, stateManager, service);
    const promise = device.poll({
      service: {
        name: 'doesnotexist',
      },
    });
    return assert.isRejected(promise, 'Service doesnotexist was not found.');
  });
  it('should not poll device, service does not have a poll function', async () => {
    const stateManager = new StateManager(event);
    const service = {
      getService: () => ({}),
    };
    const device = new Device(event, {}, stateManager, service);
    const promise = device.poll({
      service: {
        name: 'doesnotexist',
      },
    });
    return assert.isRejected(promise, 'Service doesnotexist does not have a poll function.');
  });
});
