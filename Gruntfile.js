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

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-compass');

    // define grunt tasks
    grunt.registerTask('default', ['compass']);

};
