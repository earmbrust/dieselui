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
		      "dist/css/dieselui.css": [
		      	"src/less/dieselui.less"
		      ]
		    }
		  }
		},
		requirejs: {
			combine: {
				options: {
					appDir: 'src',
					baseUrl: '.',
					dir: 'dist',
					optimize: 'none',
					optimizeCss: 'none',
					wrap: true,
					paths: {
						almond: '../lib/almond/almond',
						bootstrap: '../lib/bootstrap/bootstrap',
						jquery: '../lib/jquery/jquery',
						dieselui: '../dist'
					},
					modules: [
						{
							name: 'dieselui/all',
							exclude: ['jquery']
						},
						{
							name: 'dieselui/loader',
							include: ['almond', 'dieselui/all'],
							exclude: ['jquery']
						}
					]
				}
			}
		},
		uglify: {
			options: {
				compress: true,
				mangle: false
			},
		    min: {
		      files: {
		        'dist/loader.min.js': ['dist/loader.js'],
		        'dist/all.min.js': ['dist/all.js']
		      }
		    }
		  },
		  connect: {
		    server: {
		      options: {
		        port: 9001,
		        base: '.'
		      }
		    }
		  },
		clean: {
			default: ['bower_components', 'lib'],
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
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task.
	grunt.registerTask('default', ['clean', 'bower', 'jshint', 'qunit', 'requirejs', 'uglify', 'less']);
	grunt.registerTask('devserver', ['bower', 'jshint', 'qunit', 'connect', 'watch']); // development server

};
