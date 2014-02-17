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
				report: 'html'
			},
			fixtures_folder: {src: ['./test/fixtures/**/*.js']}
		},

		simplemocha: {
			options: {
				globals: ['should'],
				timeout: 5000,
				ignoreLeaks: false,
				reporter: 'dot'
			},

			all: { src: ['test/**/*test.js'] }			
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
