'use strict';

var TelnyxResource = require('telnyx/lib/TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = require('telnyx/lib/TelnyxResource').extend({
  path: 'texml/calls',
  create: telnyxMethod({
    path: '/{application_id}',
    urlParams: ['application_id'],
    methodType: 'create',
    method: 'POST',
  }),
});
