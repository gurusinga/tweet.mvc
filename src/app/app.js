import 'milligram';

import angular from 'angular';

import ApplicationModel from './models/model';
import ApplicationController from './controllers/controller';
import ApplicationView from './views/view';

import './app.css';

angular
  .module('app', [])
  .controller('ApplicationController', ApplicationController)
  .service('ApplicationModel', ApplicationModel)
  .directive('applicationView', ApplicationView);
