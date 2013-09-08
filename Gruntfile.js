/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		qunit: {
			tests: ['test/**/*.html']
		},
		watch: {
			files: ['Gruntfile.js', 'lib/**', 'src/**', 'test/**'],
			tasks: 'jshint qunit'
		},
		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					define: true,
					require: true
				}
			},
			defaults: ['src/**/*.js']
		},
		clean: {
			dist: ['dist/build.txt', 'dist/fuelux.zip'],
			zipsrc: ['dist/fuelux']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task.
	grunt.registerTask('default', ['jshint', 'qunit']);
	grunt.registerTask('devserver', ['lint', 'qunit', 'recess', 'server', 'watch']); // development server

};
