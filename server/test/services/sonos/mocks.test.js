const devices = require('./devices.json');

class SonosApi {
  constructor() {
    this.userId = 'SONOS_USER_ID_TEST';
  }

  async devices() {
    return Promise.resolve(this.userId).then(() => devices);
  }
}