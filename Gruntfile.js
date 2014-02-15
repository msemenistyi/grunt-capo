/*
 * grunt-capo
 * https://github.com/msemenistyi/grunt-capo
 *
 * Copyright (c) 2014 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		capo: {
			options:{
				report: 'html',

			},
			task1: {src: './javascripts'}
		},

		simplemocha: {

		},

		clean: {
			tests: {
				src: ['tmp']
			}
		}

	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('test', ['clean', 'capo', 'simplemocha']);

	grunt.registerTask('default', ['clean']);

};
