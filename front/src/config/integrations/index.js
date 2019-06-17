import deviceEn from './device.en.json';
import communicationEn from './communication.en.json';
import musicEn from './music.en.json';

const integrations = {
  en: {
    totalSize: deviceEn.length + communicationEn.length + musicEn.length,
    device: deviceEn,
    communication: communicationEn,
    music: musicEn
  }
};

communicationEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

deviceEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

musicEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

export default integrations;
