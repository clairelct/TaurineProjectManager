import './styles/app.css'
import angular from 'angular';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-messages';
// import 'angular-material';
import '@uirouter/angularjs'
import 'checklist-model'


import config from './app.config.js'
import run from './app.run.js'


// controllers
import CreateCtrl from './create/create.controller.js'
import HomeCtrl from './home/home.controller.js'
import viewProjCtrl from './view-proj/view-proj.controller.js'

	
	angular
	    .module('myApp', ['ui.router','ngMaterial','checklist-model']) //'firebase'
	    .config(config)
	    .run(run)
	    .controller('CreateCtrl', CreateCtrl)
	    .controller('viewProjCtrl', viewProjCtrl)
	    .controller('HomeCtrl', HomeCtrl);
 
	    