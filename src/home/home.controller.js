import data from '../services/fakeData.js'


// Fonctionnalité : Afficher les projets selon filtres
function HomeCtrl(){ 
	const home = this;

	// Récupérer l'objet newProject
	home.fakeData = data;

	home.filterValue = {};

	home.resetFilters = function() {
		home.filterValue = {};
	};
}

export default HomeCtrl