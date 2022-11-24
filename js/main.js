// main.js — сборщик.

import {closeUserModule} from './user_module.js';

import {setUserModule} from './user_validator.js';

import {createMiniaturePhotos} from './miniature.js';

import {getData} from './server.js';

getData((pictures) => {
  createMiniaturePhotos(pictures);
});

setUserModule(closeUserModule);

