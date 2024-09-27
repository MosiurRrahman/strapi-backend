'use strict';

/**
 * service-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-tag.service-tag');
