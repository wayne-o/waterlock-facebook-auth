'use strict';

var _ = require('lodash');

exports.attributes = function(attr){
  var template = {
		serializedData:{
			type: 'STRING'
		},

		accessToken:{
			type: 'STRING'
		},

		refreshToken:{
			type: 'STRING'
		}
  };

  _.merge(template, attr);
  _.merge(attr, template);
};
