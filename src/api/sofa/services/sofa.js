'use strict';

/**
 * sofa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sofa.sofa');
