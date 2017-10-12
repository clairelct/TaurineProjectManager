import 'materialize-css' // Import du js (fichier main)
import 'materialize-css/dist/css/materialize.css' // Import du css
import './styles/app.css' // Import du style tout en haut
import angular from 'angular'
import '@uirouter/angularjs'
import config from './app.config.js'
import HelloController from './hello/hello.controller.js'
import HomeController from './home/home.controller.js'
// remplace <script src="node_modules/angular/angular.js"></script> dans le html
// ou var angular = require('angular') dans js
	
	angular
	    .module('myApp', ['ui.router'])
	    .config(config)
	    .controller('HelloController', HelloController)
	    .controller('HomeController', HomeController);