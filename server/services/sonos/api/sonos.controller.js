module.exports = function SonosController(sonosMusicHandler) {
  /**
   * @api {get} /api/v1/service/sonos/devices Get Sonos devices
   * @apiName GetDevices
   * @apiGroup Sonos
   */
  async function getDevices(req, res) {
    const devices = await sonosMusicHandler.getDevices();
    res.json(devices);
  }

  return {
    'get /api/v1/service/sonos/devices': {
      authenticated: true,
      controller: getDevices,
    }
  };
};
