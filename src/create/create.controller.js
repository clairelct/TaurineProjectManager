// Fonctionnalité : Formulaire création projet
function CreateCtrl(){
	const create = this;

	create.message = "Hello create !";

	// objet à insérer dans array de projets
	create.newProject = {
		id: null,
		title: "Mon titre",
		domains: {
			print: true,
			webdesign: false,
			motiondesign: false,
			webdeveloppment: false
		},
		client: "Cartoon Network",
		startDate:"",
		endDate:"",
		brief: "Lorem ipsum dolor sit amet consectetur adisciping elit !",
		authors: {
			jérôme: true,
			katell: false,
			sabrina: false,
			pascal: true,
			laëtitia: false,
			claire: false,
			matthias: false,
			victor: false
		}
	}

	// create.checkBoxAuthors = [
	// 	{
	// 		"name": "Jérôme",
	// 		"selected": true
	// 	},
	// 	{
	// 		"name": "Katell",
	// 		"selected": false
	// 	},
	// 	{
	// 		"name": "Sabrina",
	// 		"selected": false
	// 	},
	// 	{
	// 		"name": "Pascal",
	// 		"selected": false
	// 	},
	// 	{
	// 		"name": "Laëtitia",
	// 		"selected": false
	// 	},
	// 	{
	// 		"name": "Claire",
	// 		"selected": false
	// 	},
	// 	{
	// 		"name": "Matthias",
	// 		"selected": false
	// 	},
	// 	{
	// 		"name": "Victor",
	// 		"selected": false
	// 	}
	// ];



	// puis push dans create.newProject

	console.log(create.checkBoxAuthors.jerome);
}

export default CreateCtrl