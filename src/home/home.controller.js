// Fonctionnalité : Afficher les projets selon filtres
function HomeCtrl(){
	const home = this;

	home.domains = [
		{domain : "tg1"},
		{domain : "tg2"},
		{domain : "tg3"}
	];

	home.projects = [
		{
			id: 1,
			name: "Jumo",
			domain: "Webdesign",
			client: "CartoonNetwork",
			startDate: "01",
			endDate: "02",
			brief: "Blablabla",
			authors: [
				{
					author : "Katell",
					image : "katell.jpg"
				}
				 ,
				{
					author : "Pascal",
					image : "pascal.jpg"
				}
			],
			image: ["image-projet.jpg"]
		},
		{
			id: 1,
			name: "Jumo",
			domain: "Webdesign",
			client: "CartoonNetwork",
			startDate: "01",
			endDate: "02",
			brief: "Blablabla",
			authors: [
				{
					author : "Katell",
					image : "katell.jpg"
				}
				 ,
				{
					author : "Pascal",
					image : "pascal.jpg"
				}
			],
			image: ["image-projet.jpg"]
		}
	];

}

export default HomeCtrl