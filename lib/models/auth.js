'use strict';

var _ = require('lodash');

exports.attributes = function(attr){
  var template = {
    
  };

  _.merge(template, attr);
  _.merge(attr, template);
};
