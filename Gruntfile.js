/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',

          sizes: [{
            name: "Opt10", /* Name of file, such as Brian-05 (if "05" were the name) */
            width: '10%', /* Width in percent or pixels */
            /*suffix: '_large_2x',*/
            quality: 100 /* Quality, from 1 to 100 */
          },{
            name: "Opt50",
            width: '50%',
            quality: 100
          }/*,{
            name: "Opt15",
            width: '15%',
            quality: 100
          },{
            name: "Opt20",
            width: '20%',
            quality: 100
          },{
            name: "Opt25",
            width: '25%',
            quality: 100
          },{
            name: "Opt30",
            width: '30%',
            quality: 100
          },{
            name: "Opt35",
            width: '35%',
            quality: 100
          },{
            name: "Opt40",
            width: '40%',
            quality: 100
          },{
            name: "Opt45",
            width: '45%',
            quality: 100
          },{
            name: "Opt50",
            width: '50%',
            quality: 100
          },{
            name: "Opt55",
            width: '55%',
            quality: 100
          },{
            name: "Opt60",
            width: '60%',
            quality: 100
          },{
            name: "Opt65",
            width: '65%',
            quality: 100
          },{
            name: "Opt70",
            width: '70%',
            quality: 100
          },{
            name: "Opt75",
            width: '75%',
            quality: 100
          },{
            name: "Opt80",
            width: '80%',
            quality: 100
          },{
            name: "Opt85",
            width: '85%',
            quality: 100
          },{
            name: "Opt90",
            width: '90%',
            quality: 100
          },{
            name: "Opt95",
            width: '95%',
            quality: 100
          },{
            name: "Opt100",
            width: '100%',
            quality: 100
          }*/
          ]

        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images/',
          dest: 'views/images/OptImages'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['views/images/OptImages'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['views/images/OptImages']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    /*copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },*/
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
