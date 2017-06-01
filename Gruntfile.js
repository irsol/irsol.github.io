
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
              width: 1024,
              suffix: '-large',
              quality: 70
          }, {     
              width: 640,
              suffix: '-medium', 
              quality: 50
          }, {
              width: 320,
              suffix: '-small',
              quality: 25
               
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img_src/fixed/*.{gif,jpg,png}' ,
          dest: 'img/'
        }]
      },
    },
  });

    /*
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/*.{gif,jpg,png}',
          dest: 'images/'
        }, { 
          expand: true,
          flatten: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/fixed'
        }]
      },
    },
  });
  */
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};