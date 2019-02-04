module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            sticky_header: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'sticky-header.css': 'scss/sticky-header.scss',
                }
            },
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass:sticky_header'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','watch']);

};