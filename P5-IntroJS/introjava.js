 
var userRodrigo = 
{
  "name": "Rodrigo",
  "dni": {
    "number": 92137562,
    "letter": "B"
  },
  "birthday": {
    "day": 25,
    "month": 4,
    "year": 1994
  },
  "cuenta": {
    "IBAN": "ES12",
    "CCC": "1234123412123456789"
  },
  "productos": {
    "leche": {
      "precio": 0.84,
      "unidades": 2
    },
    "barra de pan": {
      "precio": 0.55,
      "unidades": 4
    },
    "queso philadelphia": {
      "precio": 2.09,
      "unidades": 1
    },
    "agua bezoya": {
      "precio": 0.65,
      "unidades": 3
    }
  },
  "descuento": 5,
  "pago": "credito"
};

var userMaria = 
{
  "name": "Maria",
  "dni": {
    "number": 87322112,
    "letter": "Z"
  },
  "birthday": {
    "day": 4,
    "month": 12,
    "year": 1999
  },
  "cuenta": {
    "IBAN": "ES34",
    "CCC": "9023847615152678398"
  },
  "productos": {
    "heineken": {
      "precio": 0.71,
      "unidades": 5
    },
    "cebolla": {
      "precio": 2.49,
      "unidades": 1
    },
    "manzana golden": {
      "precio": 1.49,
      "unidades": 4
    },
    "agua bezoya": {
      "precio": 0.65,
      "unidades": 2
    }
  },
  "descuento": 0,
  "pago": "efectivo"
};

var userLaura =
{
  "name": "Laura",
  "dni": {
    "number": 33287745,
    "letter": "A"
  },
  "birthday": {
    "day": 6,
    "month": 2,
    "year": 2001
  },
  "cuenta": {
    "IBAN": "ES90",
    "CCC": "4313456789233121313"
  },
  "productos": {
    "lechuga": {
      "precio": 1.49,
      "unidades": 2
    },
    "tomate frito": {
      "precio": 0.41,
      "unidades": 3
    },
    "arroz redondo": {
      "precio": 1.63,
      "unidades": 1
    }
  },
  "descuento": 50,
  "pago": "credito"
};



function ejer2() {
  node = document.createTextNode(document.getElementById("text").value);
  document.getElementById("ejer21").appendChild(node);
}

function ejer3(){
  const nDiv = document.getElementsByTagName("div").length;
  const nLi = document.getElementsByTagName("li").length;
  const nParrafos = document.getElementsByTagName("p").length;

  node1 = document.createTextNode(nParrafos);
  document.getElementById("ejer31").appendChild(node1);
  node2 = document.createTextNode(nDiv);
  document.getElementById("ejer32").appendChild(node2);
  node3 = document.createTextNode(nLi);
  document.getElementById("ejer33").appendChild(node3);
}

function ejer4() {
  var sum = 0;
  const textUsu = document.getElementById("usuario").value;
  var user = ejer4aux(textUsu);
  nUsuario = document.createTextNode(textUsu);
  document.getElementById("ejer41").appendChild(nUsuario);
  for(var item in user.productos) {
    let aux = user.productos[item].precio * user.productos[item].unidades;
    if (user.descuento !== 0) {
      aux = aux - (aux * user.descuento)/100;
    }
    sum += aux;
  }
  importUsuario = document.createTextNode(sum.toFixed(2));
  document.getElementById("ejer52").appendChild(importUsuario);
}

function ejer4aux(nombre) {

  if (nombre === "Rodrigo") {
    return userRodrigo;
  } else if (nombre === "Maria") {
    return userMaria;
  } else if (nombre === "Laura") {
    return userLaura;
  } else {
    return userRodrigo;
  }
} 

function ejer5() {
  var sum = 0;

  const fecha = new Date();
  const hoy = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
  const nextDate = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+(fecha.getDate()+2);
  
  const comprador = document.getElementById("comprador").value;
  var user = ejer4aux(comprador);

  ncomp = document.createTextNode(comprador);
  document.getElementById("ejer51").appendChild(ncomp);
  
  for(var item in user.productos) {
    let aux = user.productos[item].precio * user.productos[item].unidades;
    if (user.descuento !== 0) {
      aux = aux - (aux * user.descuento)/100;
    }
    sum += aux;
  }

  impotUsuario = document.createTextNode(sum.toFixed(2));
  document.getElementById("ejer52").appendChild(impotUsuario);

  if (user.pago === "credito") {
    const nfecha = document.createTextNode(nextDate);
    document.getElementById("ejer53").appendChild(nfecha);
  } else {
    const nfecha = document.createTextNode(hoy);
    document.getElementById("ejer53").appendChild(nfecha);
  }


} // Rodrigo