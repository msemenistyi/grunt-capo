var capo = require('../'),
	should = require('should'),
	fs = require('fs');

describe('HTML Reports: capo should', function(){
	it('create \'capo\' folder', function(done){
		fs.readdir('capo', function(err, files){
			if (err === null) err = false;
			err.should.be.not.ok;
			done();
		});
	});

	it('create report file', function(done){
		fs.readFile('capo/report.html', function(err, data){
			if (err === null) err = false;
			err.should.be.not.ok;
			done();
		});
	});
	
});