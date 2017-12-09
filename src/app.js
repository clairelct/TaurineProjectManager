import './styles/app.css' // Import du style tout en haut
import angular from 'angular'
import '@uirouter/angularjs'
import 'checklist-model'
// import 'firebase'
// import 'angularfire'
import config from './app.config.js'
import CreateCtrl from './create/create.controller.js'
import HomeCtrl from './home/home.controller.js'
// remplace <script src="node_modules/angular/angular.js"></script> dans le html
// ou var angular = require('angular') dans js
	
	angular
	    .module('myApp', ['ui.router','ngMaterial','checklist-model','firebase'])
	    .config(config)
	    .controller('CreateCtrl', CreateCtrl)
	    .controller('HomeCtrl', HomeCtrl);