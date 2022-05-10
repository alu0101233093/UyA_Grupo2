
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuOkcu74iEsSSkI7nxllQZmWVRSTmeWx0",
  authDomain: "uya-g2-674ce.firebaseapp.com",
  databaseURL: "https://uya-g2-674ce-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "uya-g2-674ce",
  storageBucket: "uya-g2-674ce.appspot.com",
  messagingSenderId: "174249225002",
  appId: "1:174249225002:web:2963b354d275664c984c53",
  measurementId: "G-WC0VMSL14T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


$(document).ready(function() {
  $("#usuarioInput").bind("keypress", function(e) {
    var keyCode = e.which ? e.which : e.keyCode
    if (!(keyCode >= 48 && keyCode <= 57)) {
      alert("Debes introducir números")
      return false;
    }
  });

  $("#botonenviar").click(function(){
    var dbRef = firebase.database();
    $.getJSON("https://uya-g2-674ce-default-rtdb.europe-west1.firebasedatabase.app/"+$("#usuarioInput").val(), function( data ) {
      console.log(data)
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });
     
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "#incoming" );
    });
  });
});