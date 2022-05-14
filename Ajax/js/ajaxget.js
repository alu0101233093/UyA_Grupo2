$(document).ready(function() {
  $("#usuarioInput").bind("keypress", function(e) {
    var keyCode = e.which ? e.which : e.keyCode
    if (!(keyCode >= 48 && keyCode <= 57)) {
      alert("Debes introducir números")
      return false;
    }
  });

  $("#botonenviar").click(function(){
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