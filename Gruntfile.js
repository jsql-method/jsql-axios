/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            files: ['dist'],
            publish: ['dist/jsql-axios.js']
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['node_modules/jsql-core/jsql-core.min.js', 'src/jsql-axios.js'],
                dest: 'dist/jsql-axios.js'
            },
            local: {
                src: ['../jsql-js-core/dist/jsql-core.js', 'src/jsql-axios.js'],
                dest: 'dist/jsql-axios.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/jsql-axios.min.js': ['dist/jsql-axios.js']
                }
            }
        },

        copy: {

            dist: {

                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['LICENSE.md', 'package.json'],
                        dest: './dist'
                    }
                ]

            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('dev', ['concat:local']);
    grunt.registerTask('default', ['clean', 'copy', 'concat:dist', 'uglify', 'clean:publish']);

};
