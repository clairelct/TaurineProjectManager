// Fonctionnalité : Afficher les données du projet dans vue séparée
function viewProjCtrl($stateParams, $state, $rootScope){
	const vproj = this;

	// Dans l'objet data, afficher le projet dont 
	//l'id = id de param (passé dans la view)
	vproj.projet = $rootScope.projets.find( function(p) {
		return p.id == $stateParams.projectId;
	} );

	if (vproj.projet === undefined) {
		$state.go('home');
	}

	vproj.remove = function() {
		// API call

		for (var i = 0; i < $rootScope.projets.length; i++) {
			if ($rootScope.projets[i].id == $stateParams.projectId) {
				$rootScope.projets.splice(i, 1);
				break;
			}
		}

		$state.go('home');
	}
}

viewProjCtrl.$inject = ['$stateParams', '$state', '$rootScope']

export default viewProjCtrl