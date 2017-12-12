import data from '../services/fakeData.js'

// Fonctionnalité : Afficher les données du projet dans vue séparée
function viewProjCtrl($stateParams, $state){
	const vproj = this;

	// Dans l'objet data, afficher le projet dont 
	//l'id = id de param (passé dans la view)
	vproj.projet = data.find( function(p) {
		return p.id == $stateParams.projectId;
	} );

	if (vproj.projet === undefined) {
		$state.go('home');
	}

	// alert('ID = ' + $stateParams.projectId);


}

export default viewProjCtrl