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

		var done = this.async();
		
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
		capo(this.filesSrc, options.object, options).event(options.event).report(options.report).
				find(function(err, result){
			if (err){
				grunt.log.fail(err);
			}
			done(!err);
		});

	});

};