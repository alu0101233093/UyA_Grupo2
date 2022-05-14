// file: script.js
// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAuOkcu74iEsSSkI7nxllQZmWVRSTmeWx0",
  authDomain: "uya-g2-674ce.firebaseapp.com",
  databaseURL: "https://uya-g2-674ce-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "uya-g2-674ce",
  storageBucket: "uya-g2-674ce.appspot.com",
  messagingSenderId: "174249225002",
  appId: "1:174249225002:web:2963b354d275664c984c53",
  measurementId: "G-WC0VMSL14T"
};
firebase.initializeApp(firebaseConfig);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  $('#contacts').append(contactHtmlFromObject(snap.val()));
});

//save contact
$('.addValue').on("click", function( event ) {  
    event.preventDefault();
    if( $('#name').val() != '' || $('#email').val() != '' ){
      contactsRef.push({
        name: $('#name').val(),
        email: $('#email').val(),
        location: {
          city: $('#city').val(),
          state: $('#state').val(),
          zip: $('#zip').val()
        }
      })
      contactForm.reset();
    } else {
      alert('Please fill atlease name or email!');
    }
  });

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  console.log( contact );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+contact.name+'</p>';
      html += '<p>'+contact.email+'</p>';
      html += '<p><small title="'+contact.location.zip+'">'
                + contact.location.city + ', '
                + contact.location.state + '</small></p>';
    html += '</div>';
  html += '</li>';
  return html;
}