// Fonctionnalité : Formulaire création projet
function CreateCtrl($firebaseObject){
	const create = this;

	var ref = firebase.database().ref();

	console.log(ref);
	// pusher cet objet 'final' dans JSON 
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

	create.domains = ["print","webdesign","motiondesign","webdeveloppment"]
	create.authors = ["jerome","katell","sabrina","pascal","laetitia","claire","matthias","victor"]

	// Submit
	create.save = function(){
		if (create.newProject) {
			console.log(create.newProject);
			localStorageService.set('result', create.newProject);
		}
	}


}; 



export default CreateCtrl