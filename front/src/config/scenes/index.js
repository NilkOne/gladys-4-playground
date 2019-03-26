import scenesEn from './scenes.en.json';

const scenes = {
  en: {
    totalSize: scenesEn.length,
    scenes: scenesEn
  }
};

scenesEn.forEach((scene) => {
  scenes.en[scene.selector] = scene;
});

export default scenes;