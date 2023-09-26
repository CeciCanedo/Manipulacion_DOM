// Creacion del perfil del usuario
const user ={
}

function createUser(user){
    document.getElementById('userName').textContent= user.Name;
    document.getElementById('userAge').textContent= user.Age;
    document.getElementById('userDescription').textContent= user.Description;
}

createUser(user); //Ejecuta la funcion createUser

//Eventos
const inputName= document.getElementById('nombre');
const inputAge= document.getElementById('edad');
const inputDescription= document.getElementById('contenido');

//Botones
const btnName= document.getElementById('btnName');
const btnAge= document.getElementById('btnAge');
const btnDescription= document.getElementById('btnDescription');

btnName.addEventListener('click', () => {
    userName.textContent= inputName.value; 
})
btnAge.addEventListener('click', () => {
    userAge.textContent= inputAge.value;
})
btnDescription.addEventListener('click', () => {
    userDescription.textContent= inputDescription.value;
})

const CARD_SECTION= document.getElementById('profiles');