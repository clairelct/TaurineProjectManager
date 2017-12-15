
// Fonctionnalité : Afficher les projets selon filtres
function HomeCtrl($rootScope){ 
	const home = this;

	// Récupérer l'objet newProject
	home.projets = $rootScope.projets;

	home.filterValue = {};

	home.resetFilters = function() {
		home.filterValue = {};
	};

	home.checkAuthor = function(actual, expected) {

		// console.log(actual, expected);

		if ("object" === typeof actual) {
			return actual.name === expected;
		}
		else {
			return actual === expected;
		}
	};
}

HomeCtrl.$inject = ['$rootScope'];

export default HomeCtrl