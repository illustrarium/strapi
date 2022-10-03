'use strict';

/**
 * vue-app router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vue-app.vue-app');
