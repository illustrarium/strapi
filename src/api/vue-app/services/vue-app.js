'use strict';

/**
 * vue-app service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vue-app.vue-app');
