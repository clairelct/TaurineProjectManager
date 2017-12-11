// Fonctionnalité : Formulaire création projet
function CreateCtrl(){ 
	const create = this;
	
	// pusher cet objet 'final' dans Firebase
	create.newProject = {
		id: null,
		title: "",
		domainsSelected: [],
		client: "",
		startDate:"",
		endDate:"",
		brief: "",
		authorsSelected: []
	};

	create.domains = ["Print","Webdesign","Motiondesign","WebDeveloppment"]
	create.authors = ["jerome","katell","sabrina","pascal","laetitia","claire","matthias","victor"]

	create.test = function(){
		console.log(create.newProject.authorsSelected);
	}

	// Submit : Envoyer donnée à Firebase
	create.save = function($firebaseObject){
		if (create.newProject) {
			console.log(create.newProject);
		}
	}

}; 



export default CreateCtrl