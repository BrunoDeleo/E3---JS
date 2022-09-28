const input = document.getElementById ("input");
const btn = document.getElementById ("btn");
const cardsContainer = document.getElementById ("cards-container");
const Pizzas=[
    {id:1, nombre:"Muzza", ingredientes: ['muza', 'salsa tomate'],  precio: 1000, img: './img/muzza.png'},
    {id:2, nombre:"Fugazzeta", ingredientes: ['muza', 'cebolla'], precio: 1200},
    {id:3, nombre:"Napolitana", ingredientes: ['muza', 'salsa tomate', 'tomates'], precio: 1400},
    {id:4, nombre:"Anchoas", ingredientes: ['salsa tomate', 'anchoas'], precio: 1100},
    {id:5, nombre:"Morrón", ingredientes: ['muza', 'salsa tomate', 'morrones'], precio: 1400},
    {id:6, nombre:"Palmitos", ingredientes: ['muza', 'salsa tomate', 'palmitos'], precio: 1400},
];

//salvar y recuperar info

let pedido = JSON.parse(localStorage.getItem('pedido')) || [];

const saveLocalStorage = (e) => {
    localStorage.setItem ('pedido', JSON.stringify(e)) 
};


const saveData = () =>{
    pedido = [
        ...pedido,
        {
            id: '',
            nombre: '',
            ingredientes: '',
            precio:'',
            img:'',
        }
    ]
}






//renderizar

const renderPizza = (pizza) => {

    ` ${pizza.name}
    `
}

const renderPedido = (pedido) =>{
    cardsContainer.innerHTML = pedido.map((pizza) => renderPizza(pizza)).join('');

}



//

const addPizza = (e) => {
    e.preventDefault();
    if(isValidId()) {
        saveData();
        console.log(pedido)
        form.reset(); //reemplazar esto dsps
        saveLocalStorage();
        renderPedido();
    } 
}








// errores

// const isEmpty = (value) => value === !value.length;

// const isValid = () => {
//     const currentID = input.value;
//     const validID = Pizzas.id;
//     return validID == currentID;
// }

const isValid = () => {
    const currentID = input.value;
    if (!Pizzas.some(e => e.id === currentID)){
        alert ('ingrese ID valido')
        return;
    }
}



const showError = () => {

}

const checkNum = () => {
    let valid = false;
    const NumValue = input.value.trim();
    if(!isValid(NumValue)) {
      showError(input, '* El telefono ingresado es invalido')
    } else {
      clearError(input);
      valid = true;
    }
    return valid
  }


//boton submit

const handleClick = () => {
    console.log(input.value);
}

btn.addEventListener ('click', handleClick)

//

const pizzaId = parseInt(input.value);

console.log (pizzaId);

const resultado = Pizzas.find((pizza) => pizza.id === input.value);
    console.log(resultado); 


    //


renderPedido(pedido);
saveLocalStorage(pedido);
// aca va ka funcion de mostrar ultima card anterior 

const innit = () => {
    renderPedido();
    //funcion para ultima cosa ingresada
    // form.addEventListener('submit', submitForm);
}





// Pizzas.forEach( (e) =>{
//     console.log (`La pizza número ${e.id} se llama ${e.nombre}`);
//     return;
//     }
// );


// Pizzas.forEach( (e) =>{
//      e.id == pizzaId? console.log (`La pizza número ${e.id} se llama ${e.nombre}`) : console.log (`error`);
//      }
//  );

 

// Pizzas.forEach( (e) =>{
//     if ((e.id) == input.valueAsNumber) {
//         console.log (`La pizza número ${e.id} se llama ${e.nombre}`)};
//     else (console.log (`error`));
//     }
// );





// '${input(value)}'

// .valueAsNumber