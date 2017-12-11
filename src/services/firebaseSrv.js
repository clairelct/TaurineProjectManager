function firebaseSrv($http){
	var config = {
		    apiKey: "AIzaSyAXT9-ysoTPrNwhQzsRM3sTxPMd4cek63c",
		    authDomain: "taurine-project-manager.firebaseapp.com",
		    databaseURL: "https://taurine-project-manager.firebaseio.com",
		    projectId: "taurine-project-manager",
		    storageBucket: "taurine-project-manager.appspot.com",
		    messagingSenderId: "438138179717"
		  };
		  firebase.initializeApp(config);
		  console.log(firebase);

		  var database = firebase.database();
		  var ref = database.ref('projects');

		  var data = {
		  	name: "Jason",
		  	score: 43
		  }

		  ref.push(data);
}

export default firebaseSrv