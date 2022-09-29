// link a Vercel https://e3-js-one.vercel.app/
// no llegué a terminarlo, estoy teniendo problemas en la parte de acceder a los datos del array para renderizar la card




const input = document.getElementById ("input");
const btn = document.getElementById ("btn");
const cardsContainer = document.getElementById ("cards-container");
const h1 = document.getElementById ("nom");
const h3 = document.getElementById ("prec");
const Pizzas=[
    {id:1, nombre:"Muzza", ingredientes: ['muza', 'salsa tomate'],  precio: 1000, img: './img/muzza.png'},
    {id:2, nombre:"Fugazzeta", ingredientes: ['muza', 'cebolla'], precio: 1200, img: './img/champ.png'},
    {id:3, nombre:"Napolitana", ingredientes: ['muza', 'salsa tomate', 'tomates'], precio: 1400, img: './img/tom.png'},
    {id:4, nombre:"Anchoas", ingredientes: ['salsa tomate', 'anchoas'], precio: 1100, img: './img/ruc.png'},
    {id:5, nombre:"Morrón", ingredientes: ['muza', 'salsa tomate', 'morrones'], precio: 1400, img: './img/muzza.png'},
    {id:6, nombre:"Palmitos", ingredientes: ['muza', 'salsa tomate', 'palmitos'], precio: 1400, img: './img/sal.png'},
];

////////////salvar y recuperar info

// let pedido = JSON.parse(localStorage.getItem('pedido')) || [];

const saveLocalStorage = (e) => {
    localStorage.setItem ('pedido', JSON.stringify(e)) 
};

///////////////////renderizar



const renderPizza = (pizza) => {
    const { nombre, precio } = pizza; 
    h1.innerHTML = `Nombre:${nombre}`;
    h3.innerHTML = `Precio:${precio}`;
    
  };

// const renderPizza = (pizza) => {
//     const { nombre, precio } = pizza; 
//     return `
//     <h4>${nombre}</h4>
//     <h4>${precio}</h4>
//     ` 
//   };

// const render2 = (e) =>{
//     cardsContainer.innerHTML = renderPizza;
// }

const match = Pizzas.find((e) => e.id === input.value);
     renderPizza(match); 



////////////////////////////////

  const addPizza = (e) => {
    e.preventDefault();
    if(isValid()) {
        saveLocalStorage();
        const match = Pizzas.find((e) => e.id === input.value);
    renderPizza(match); 
    } 
}

//////////////////////////////////////

//
//boton 

btn.addEventListener ('click', addPizza)

//

// errores

const isValid = () => {
    const currentID = input.value;
    if (!Pizzas.some(e => e.id == currentID)){
        alert ('ingrese un ID del 1 al 6')
        // cambiar por input error en small
        return false;
    } else {
        return true;
    }
}

/////



// const init = () => {
//     //renderizar ultima carta;
// }

// init();
