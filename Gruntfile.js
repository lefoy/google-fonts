module.exports = function(grunt) {

    // load grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dest: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    environment: 'production'
                }
            },
        }
    });

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-compass');

    // define grunt tasks
    grunt.registerTask('default', ['compass']);

};
