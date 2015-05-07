module.exports = function(grunt) {

	var path = require('path');
	var comBrowserify = require('com-browserify');
    var partitionBundleExt = require('pb-ext');

	var prjCore = require('prj.core');
	var prjConfig = prjCore.config;
	var pkg = grunt.file.readJSON('package.json');
	var buildConfig = grunt.file.readJSON('build.config.json');

	var prjPath = prjConfig.path;
	var distPCPath = prjPath.distPCPath;
	var distPath = distPCPath;
	var distScriptPath = path.resolve(distPath, 'script');
    var distStylePath = path.resolve(distPath, 'style');
	var srcPath = './src';
	var srcScriptPath = path.resolve(srcPath, 'node_modules');
    var srcStylePath = path.resolve(srcPath, 'style');

	var tasks = [
        'stylus', // css
        'browserify', 'uglify', 'cachebusttag:includeFilesConfig', // js
        'htmlmin', 'cachebusttag:index', 'cachebusttag:auth', 'cachebusttag:set', 'cachebusttag:setedit' // html
    ];

    var tasksDebug = [
        'stylus', // css
        'browserify', 'cachebusttag:includeFilesConfig', // js
        'htmlmin', 'cachebusttag:index', 'cachebusttag:auth', 'cachebusttag:set', 'cachebusttag:setedit' // html
    ];

	grunt.initConfig({
		browserify: {
			main: {
				src: [],
				dest: 'none.js',
				options: {
                    preBundleCB: function(b) {
					   b.plugin(comBrowserify);
					   b.plugin(partitionBundleExt, {
                            map: buildConfig.script,
                            output: distScriptPath,
                            basedir: srcScriptPath,
                            includeFilesConfigPath: 'include_files_config.js',
                            enableCacheBustTag: 'p/',
                            url: 'script/'
                        });
                    }
				}
			}
		},
        uglify: {
            main: {
                files: [{
                    expand: true,
                    cwd: distScriptPath,
                    src: '**/*.js',
                    dest: distScriptPath
                }]
            }
        },
        stylus: {
            common: {
                src: path.resolve(srcStylePath, 'common', 'main.styl'),
                dest: path.resolve(distStylePath, 'common.css'),
                options: {
                    import: ['nib']
                }
            },
            index: {
                src: path.resolve(srcStylePath, 'index', 'main.styl'),
                dest: path.resolve(distStylePath, 'index.css'),
                options: {
                    import: ['nib']
                } 
            },
            auth: {
                src: path.resolve(srcStylePath, 'auth', 'main.styl'),
                dest: path.resolve(distStylePath, 'auth.css'),
                options: {
                    import: ['nib']
                } 
            },
            set: {
                src: path.resolve(srcStylePath, 'set', 'main.styl'),
                dest: path.resolve(distStylePath, 'set.css'),
                options: {
                    import: ['nib']
                }
            },
            setedit: {
                src: path.resolve(srcStylePath, 'setedit', 'main.styl'),
                dest: path.resolve(distStylePath, 'setedit.css'),
                options: {
                    import: ['nib']
                }
            }
        },
		htmlmin: {
            // 首页
            index: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processScripts: ['text/tmpl', 'text/javascript']
                },
                src: path.resolve(srcPath, 'index.html'),
                dest: path.resolve(distPath, 'index.html')
            },
            // 登陆页
            auth: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processScripts: ['text/tmpl', 'text/javascript']
                },
                src: path.resolve(srcPath, 'auth.html'),
                dest: path.resolve(distPath, 'auth.html')
            },
            // 卡片集展示页面
            set: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processScripts: ['text/tmpl', 'text/javascript']
                },
                src: path.resolve(srcPath, 'set.html'),
                dest: path.resolve(distPath, 'set.html')
            },
            // 卡片集编辑页面
            setedit: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processScripts: ['text/tmpl', 'text/javascript']
                },
                src: path.resolve(srcPath, 'setedit.html'),
                dest: path.resolve(distPath, 'setedit.html')
            }
        },
        cachebusttag: {
            // 首页
            index: {
                src: path.resolve(distPath, 'index.html'),
                dest: path.resolve(distPath, 'index.html'),
                options: {
                    basedir: prjPath.distPath
                }
            },
            // 登陆页
            auth: {
                src: path.resolve(distPath, 'auth.html'),
                dest: path.resolve(distPath, 'auth.html'),
                options: {
                    basedir: prjPath.distPath
                }
            },
            // 卡片集展示页面
            set: {
                src: path.resolve(distPath, 'set.html'),
                dest: path.resolve(distPath, 'set.html'),
                options: {
                    basedir: prjPath.distPath
                }
            },
            // 卡片集编辑页面
            setedit: {
                src: path.resolve(distPath, 'setedit.html'),
                dest: path.resolve(distPath, 'setedit.html'),
                options: {
                    basedir: prjPath.distPath
                }
            },
            includeFilesConfig: {
                src: path.resolve(distScriptPath, 'include_files_config.js'),
                dest: path.resolve(distScriptPath, 'include_files_config.js'),
                options: {
                    basedir: prjPath.distPath
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-cache-bust-tag');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('release', function() {
        grunt.task.run(tasks);
    });

    grunt.registerTask('debug', function() {
        grunt.task.run(tasksDebug);
    });

};