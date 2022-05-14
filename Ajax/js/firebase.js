// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAuOkcu74iEsSSkI7nxllQZmWVRSTmeWx0",
    authDomain: "uya-g2-674ce.firebaseapp.com	", // uya-g2-674ce.web.app	
    databaseURL: "https://uya-g2-674ce-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "uya-g2-674ce" // ,
    // storageBucket: "******************",
    // messagingSenderId: "***************",
    // appId: "***********************"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Referencia a la base de datos
  var database = firebase.database();
  var i = 1

  function cargar(){
    var indice = "alumno" + i
    var referencia = database.ref(indice);
    referencia.get({
      nombre: $("textarea#textarea2").val()
    });
    i = i + 1
    mostrarvalores()
  }

  function actualizar(){
    var referencia = database.ref('alumno');
    referencia.update({
      edad: $("textarea#textarea3").val()
    });
    mostrarvalores()
  }
  
  function mostrarvalores(){
    referencia = database.ref('/');
      referencia.once('value', snapshot => {
        console.log(snapshot.val());
      });
  }