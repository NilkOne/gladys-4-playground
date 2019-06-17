const { expect } = require('chai');
const proxyquire = require('proxyquire').noCallThru();
const MockedSonos = require('./mocks.test');

const SonosService = proxyquire('../../../services/sonos/index', {
//   sonosApi: MockedSonos,
});

// describe('SonosService.music', () => {
//   const sonosService = SonosService();
//   const deviceIp = '192.168.1.99';
//   it('should play the speaker', async () => {
//     await sonosService.music.play(deviceIp);
//   });
//   it('should pause the speaker', async () => {
//     await sonosService.light.pause(deviceIp);
//   });
// });

describe.only('SonosService', () => {
    const sonosService = SonosService();
    it('should have start function', () => {
      expect(sonosService)
        .to.have.property('start')
        .and.be.instanceOf(Function);
    });
    it('should have stop function', () => {
      expect(sonosService)
        .to.have.property('stop')
        .and.be.instanceOf(Function);
    });
});
