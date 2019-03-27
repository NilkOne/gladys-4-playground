
/**
 * @description Load device in memory.
 * @param {Object} device - Device object.
 * @example
 * device.add(device);
 */
function add(device) {
  this.stateManager.setState('device', device.selector, device);
  device.features.forEach((feature) => {
    this.stateManager.setState('deviceFeature', feature.selector, feature);
  });
  if (device.should_poll === true && device.poll_frequency) {
    if (!this.devicesByPollFrequency[device.poll_frequency]) {
      this.devicesByPollFrequency[device.poll_frequency] = [];
    }
    this.devicesByPollFrequency[device.poll_frequency].push(device);
  }
}

module.exports = {
  add,
};
