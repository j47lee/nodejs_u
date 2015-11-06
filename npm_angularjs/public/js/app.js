var pg = require('pg');

angular.module('testApp', []);

angular.module('testApp')
    .controller('mainController', ctrlFunc);

    function ctrlFunc(){
      this.message = 'Hi';

      this.people = [
        {
          name: 'Jonathan'
        },
        {
          name: 'Melissa'
        }
      ]
    }
