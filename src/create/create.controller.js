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

	create.domains = ["Print","Webdesign","Motiondesign","WebDeveloppment"]
	//create.authors = ["jerome","katell","sabrina","pascal","laetitia","claire","matthias","victor"]
	create.authors = [
		{
			name : "jerome",
			frame : "author_frame_jerome.png"
		},
		{
			name : "katell",
			frame : "author_frame_katell.png"
		},
		{
			name : "sabrina",
			frame : "author_frame_sabrina.png"
		},
		{
			name : "pascal",
			frame : "author_frame_pascal.png"
		},
		{
			name : "laetitia",
			frame : "author_frame_laetitia.png"
		},
		{
			name : "claire",
			frame : "author_frame_claire.png"
		},
		{
			name : "matthias",
			frame : "author_frame_matthias.png"
		},
		{
			name : "victor",
			frame : "author_frame_victor.png"
		}
	];

	create.test = function(){
		console.log(create.newProject.authorsSelected);
	}

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