import './styles/app.css'
import angular from 'angular';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-messages';
// import 'angular-material';
import '@uirouter/angularjs'
import 'checklist-model'
// import 'firebase'
// import 'angularfire'

import config from './app.config.js'

// services
// import firebaseSrv from './services/firebaseSrv'

// controllers
import CreateCtrl from './create/create.controller.js'
import HomeCtrl from './home/home.controller.js'

	
	angular
	    .module('myApp', ['ui.router','ngMaterial','checklist-model']) //'firebase'
	    .config(config)
	    .controller('CreateCtrl', CreateCtrl)
	    .controller('HomeCtrl', HomeCtrl);
 
	    