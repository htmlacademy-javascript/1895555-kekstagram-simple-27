// main.js — сборщик.

import {closeUserModule} from './user_module.js';

import {setUserModule} from './user_validator.js';

import {miniaturePhotos} from './miniature.js';

import {getData} from './server.js';

getData((pictures) => {
  miniaturePhotos(pictures);
});

setUserModule(closeUserModule);

