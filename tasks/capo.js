/*
 * grunt-capo
 * https://github.com/msemenistyi/grunt-capo
 *
 * Copyright (c) 2014 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	
	var path = require('path'),
		capo = require('capo');

	grunt.registerMultiTask('capo', 'Event-managing module wrapper', function(){
		
		var defaultOptions = {
			report: 'html',
			object: undefined,
			event: false
		};

		var options = this.options();
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)){
				if (typeof options[i] === 'undefined'){
					options[i] = defaultOptions[i];
			 }
			}
		}
		capo(this.filesSrc[0], options.object).event(options.event).report(options.report).
				find(function(err, result){
			console.log(result);
		});

	});

};