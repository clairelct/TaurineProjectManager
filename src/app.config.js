function config($stateProvider, $locationProvider, $urlRouterProvider) {
	    /*
	        Supprime le préfixe "!" des URLs, présent par défaut dans Angular 1.6.* (voir http://stackoverflow.com/questions/41226122/url-hash-bang-prefix-instead-of-simple-hash-in-angular-1-6)
	        Au lieu de qqch comme   http://localhost:8080/#!/home ,
	        on aurait plutôt  http://localhost:8080/#/home (ce qui est plus propre)
	    */
		
	    $locationProvider.hashPrefix('')
		
	    /**
	     * Configuration des routes de l'application
	     */
	    
	    $stateProvider
	        .state({
	            name        : 'home',
	            url         : '/',
	            templateUrl : 'src/home/home.view.html',
	            controller  : 'HomeCtrl',
	            controllerAs: 'home'
	        })
	        .state({
	            name        : 'new-project',
	            url         : '/new-project',
	            templateUrl : 'src/create/create.view.html',
	            controller  : 'CreateCtrl',
	            controllerAs: 'create'
	        })
		
	    // Si aucune route n'est atteinte, on charge par defaut celle-ci (la home)
		$urlRouterProvider.otherwise('/')
			    
	}
	
	// Nomme explicitement les injections de dépendances (pour éviter les bugs lors de la minification)
	config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']


	// Export de la fonction de configuration
	export default config