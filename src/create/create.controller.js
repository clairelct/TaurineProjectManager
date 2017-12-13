// Fonctionnalité : Formulaire création projet
function CreateCtrl( $rootScope, $state ){ 
	const create = this;
	
	// pusher cet objet 'final' dans Firebase
	create.newProject = {
		id: null,
		projectImg: "thumbnail_project_frame.gif",
		title: "",
		domainsSelected: [],
		client: "",
		startDate:"",
		endDate:"",
		brief: "",
		authorsSelected: []
	};

	create.domains = ["Print","Webdesign","Motiondesign","Développement Web"]

	create.authors = [
		{
			name : "Jérôme",
			frame : "author_frame_jerome.png"
		},
		{
			name : "Katell",
			frame : "author_frame_katell.png"
		},
		{
			name : "Sabrina",
			frame : "author_frame_sabrina.png"
		},
		{
			name : "Pascal",
			frame : "author_frame_pascal.png"
		},
		{
			name : "Laëtitia",
			frame : "author_frame_laetitia.png"
		},
		{
			name : "Claire",
			frame : "author_frame_claire.png"
		},
		{
			name : "Matthias",
			frame : "author_frame_matthias.png"
		},
		{
			name : "Victor",
			frame : "author_frame_victor.png"
		}
	];

	// Submit : Envoyer donnée à Firebase
	create.save = function(){
		if (create.newProject) {

			// En attendant de passer par une API qui gère la génération d'un ID
			create.newProject.id = Date.now();
			$rootScope.projets.push( create.newProject );

			$state.go('home');
		}
	}

}; 


CreateCtrl.$inject = ['$rootScope', '$state']


export default CreateCtrl