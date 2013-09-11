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
			options: {
		      timeout: 15000
		    },
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
				unused: false,
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
		bower: {
			libs: {
				options: {
					layout: "byComponent"
				}
			}
		},
		less: {
		  development: {
		    options: {
		      paths: ["bower_components/"]
		    },
		    files: {
		      "dist/checkbox.css": [
		      	"src/less/dieselui.less",
		      	"src/less/checkbox.less",
		      	"src/less/combobox.less",
		      	"src/less/datagrid.less",
		      ]
		    }
		  }
		},
		clean: {
			dist: ['dist'],
			zipsrc: ['dist/fuelux'],
			libs: ['lib']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task.
	grunt.registerTask('default', ['bower', 'jshint', 'qunit']);
	grunt.registerTask('devserver', ['bower', 'lint', 'qunit', 'recess', 'server', 'watch']); // development server

};
