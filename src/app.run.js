import data from './services/fakeData.js'

function run( $rootScope ) {
	$rootScope.projets = data;
}

// Nomme explicitement les injections de dépendances (pour éviter les bugs lors de la minification)
run.$inject = [ '$rootScope' ]


// Export de la fonction de run
export default run