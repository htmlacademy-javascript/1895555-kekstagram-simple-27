// main.js — сборщик.

import {
  // eslint-disable-next-line no-unused-vars
  getDescriptionPhoto
} from './data.js';


import {
  miniaturePhotos
} from './miniature.js';

import ('./user_module.js');

import {onUserModule} from './user_validator.js';

import ('./photo_scale.js');

import ('./photo_effects.js');

miniaturePhotos();

onUserModule();

