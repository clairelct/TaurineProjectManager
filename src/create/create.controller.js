// Fonctionnalité : Formulaire création projet
function CreateCtrl(){
	const create = this;

	create.message = "Hello create !";

	// objet à insérer dans array de projets
	create.newProject = {
		id: null,
		title: "Mon titre",
		domains: [],
		client: "Cartoon Network",
		startDate:"",
		endDate:"",
		brief: "Lorem ipsum dolor sit amet consectetur adisciping elit !",
		authors: []
	};

	// create.authors = [
	//  { name: 'Jérôme', selected: true},
	//  { name: 'Katell', selected: false},
	//  { name: 'Pascal', selected: false},
	//  { name: 'Claire', selected: false}
	// ];

	create.checkBoxDomain = {
		print: false,
		webdesign: false,
		motiondesign: false,
		webdeveloppment: false
	};

	create.checkBoxAuthors = {
		jerome: false,
		katell: false,
		sabrina: false,
		pascal: false,
		laetitia: false,
		claire: false,
		matthias: false,
		victor: false
	};

	// si true, push valeur de l'input dans array de create.newProject.authors
	

	// puis push dans create.newProject, 
	//elem. true -> valeur de l'input
	//https://openclassrooms.com/forum/sujet/angularjs-ajout-de-donnees-dans-un-fichier-json
};

export default CreateCtrl