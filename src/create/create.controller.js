// Fonctionnalité : Formulaire création projet
function CreateCtrl(){
	const create = this;

	create.message = "Hello create !";

	// objet à insérer dans array de projets
	create.newProject = {
		title: "Mon titre",
		client: "Cartoon Network",
		authors: [],
		brief: "Lorem ipsum dolor sit amet consectetur adisciping elit !"
	}

	create.chkBoxAuthors = {
		jerome: false,
		katell: false,
		sabrina: false,
		pascal: false,
		laetitia: false,
		claire: false,
		matthias: false,
		victor: false
	}


	// puis push dans create.newProject

	create.save = function(){
		console.log('Enregistré !');
	}

}

export default CreateCtrl