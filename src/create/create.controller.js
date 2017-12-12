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
	//create.authors = ["jerome","katell","sabrina","pascal","laetitia","claire","matthias","victor"]
	create.authors = [
		{
			name : "jerome",
			frame : "../src/img/author_frame_jerome.png"
		},
		{
			name : "katell",
			frame : "../src/img/author_frame_katell.png"
		},
		{
			name : "sabrina",
			frame : "../src/img/author_frame_sabrina.png"
		},
		{
			name : "pascal",
			frame : "../src/img/author_frame_pascal.png"
		},
		{
			name : "laetitia",
			frame : "../src/img/author_frame_laetitia.png"
		},
		{
			name : "claire",
			frame : "../src/img/author_frame_claire.png"
		},
		{
			name : "matthias",
			frame : "../src/img/author_frame_matthias.png"
		},
		{
			name : "victor",
			frame : "../src/img/author_frame_victor.png"
		}
	];

	create.test = function(){
		console.log(create.newProject.authorsSelected);
	}

	// Submit : Envoyer donnée à Firebase
	create.save = function(){
		if (create.newProject) {
			console.log(create.newProject);
		}
	}

}; 



export default CreateCtrl