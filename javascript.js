//Arrays vacios y de productos 
const productos = [
  {nombreS: "Sandwich"}, 
  {nombreB: "Bebidas"},
  {nombreT: "Tortas"},
  {nombreD: "Dulces"}
]
const sandwiches = [
  {id: 1, 
  nombre: "Sandwich de pollo", 
  precio: "$45",
  },
  {id: 2, 
  nombre: "Sandwich de jamón", 
  precio: "$40",
  },
  {id: 3, 
  nombre: "Sandwich de atún", 
  precio: "$35",
  }
]
const tortas = [
  {id: 4, 
  nombre: "Torta de pollo", 
  precio: "$45",
  },
  {id: 5, 
  nombre: "Torta de jamón", 
  precio: "$40",
  },
  {id: 6, 
  nombre: "Torta de atún", 
  precio: "$35",
  }
]
const dulces = [
  {id: 7, 
  nombre: "Crepa de Nutella", 
  precio: "$45",
  },
  {id: 8, 
  nombre: "Waffle", 
  precio: "$40",
  },
  {id: 9, 
  nombre: "Rebanada de pastel de chocolate ", 
  precio: "$45",
  }
]    
const bebidas = [
  {id: 10, 
  nombre: "Café Americano", 
  precio: "$30",
  },
  {id: 11, 
  nombre: "Leche con chocolate", 
  precio: "$25",
  },
  {id: 12, 
  nombre: "Cafe capuchino", 
  precio: "$40",
  },
  {id: 13, 
  nombre: "Refresher", 
  precio: "$45",
  }
]
let carrito1 = [];

//constantes para traer elementos HTML
const datos =document.getElementById('datos')
const inputDatos = document.querySelectorAll('.inputDatos') 
const continuar = document.getElementsByClassName('continuar')[0]
const btnAceptar = document.getElementById('btnAceptar')
const btnReiniciar = document.getElementById('btnReiniciar')
const p = document.getElementsByTagName('p')[0]
const btnSi = document.getElementById('btnSi')
const btnNo = document.getElementById('btnNo')
const menu = document.getElementsByClassName ('formulario__menu')[0]
const btnSalir = document.getElementById('btnSalir')
//const selectProducto = document.getElementsByClassName('product-container')
const selectMenuSandwich = document.getElementById('sandwich')
const selectMenuTorta = document.getElementById('torta')
const selectMenuDulce = document.getElementById('dulce')
const selectMenuBebida = document.getElementById('bebida')
const mostrarSeleccion = document.getElementById('mostrarSeleccion')


//Cargar datos del formulario
datos.addEventListener('submit', function(event) {
  event.preventDefault(); 
  continuar.classList.remove('disable');
});

//saludo al usuario 
function saludar (){
  p.innerText = (`"Hola ${inputDatos[0].value} ${inputDatos[1].value} tu número de alumno es ${inputDatos[2].value} \n  ¿Esta información es correcta?"`)  
}


//Datos usuario 
function enviarInformacion (){
  const nombre = inputDatos[0].value;
  const apellido = inputDatos[1].value;
  const numero = inputDatos[2].value;
  const datos= {
    nombre,
    apellido,
    numero
  }
  localStorage.setItem('nombre', nombre)
  localStorage.setItem('apellido', apellido)
  localStorage.setItem('numero', numero)
  
}


//Botones
  btnReiniciar.addEventListener(`click`, () => {
    datos.reset();
    menu.classList.add('disable')
    continuar.classList.add('disable')
  })

  btnSi.addEventListener(`click`, () => {
    menu.classList.remove('disable')
    continuar.classList.add('disable')
  })
  btnNo.addEventListener(`click`, () => {
    datos.reset()
    continuar.classList.add('disable')
    menu.classList.add('disable')
  })

  btnSalir.addEventListener(`click`, () => {
    datos.reset()
    continuar.classList.add('disable')
    menu.classList.add('disable')
  })
  btnAceptar.addEventListener(`click`, () => {
    saludar()
    enviarInformacion ()
  })


//Select del menú 
  sandwiches.forEach((sandwich) => {
    const option = document.createElement("option");
    option.value = sandwich.id; 
    option.text = `${sandwich.nombre}`; 
    option.precio =`${sandwich.precio}`
    selectMenuSandwich.appendChild(option); 
  });


  tortas.forEach((torta) => {
    const option = document.createElement("option"); 
    option.value = torta.id; 
    option.text = `${torta.nombre} - ${torta.precio}`; 
    selectMenuTorta.appendChild(option); 
  });
  dulces.forEach((dulce) => {
    const option = document.createElement("option"); 
    option.value = dulce.id; 
    option.text = `${dulce.nombre} - ${dulce.precio}`; 
    selectMenuDulce.appendChild(option); 
  });
bebidas.forEach((bebida) => {
    const option = document.createElement("option"); 
    option.value = bebida.id; 
    option.text = `${bebida.nombre} - ${bebida.precio}`; 
    selectMenuBebida.appendChild(option); 
  });


//function crearProducto () 


