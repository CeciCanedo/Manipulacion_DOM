/** Obtener elementos
 * ID - Un unico elemento
 * Clase -- Obtenemos varios elementos que coincidan
 * querySelector --- Solo regresa el primer nodo que coincida (ID o clase)
 * */ 
const title= document.getElementById('title1');

const subtitle = document.getElementsByClassName('subtitulo');

const secondTitle= document.querySelector('.subtitulo');
const subtitles= document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles);

// Creacion del perfil del usuario

const user ={
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'se7en', 'Inception', 'SAW'],
}

function createUser(user){
    document.getElementById('userName').textContent= user.Name;
    document.getElementById('age').textContent= user.age;
    document.getElementById('mail').textContent=user.email;

    const ul= document.getElementById('fav-films');

    user.favFilms.forEach(film => {// Esto es un callback, una funcion que se ejecuta dentro de una funcion
        const li= document.createElement('li');
        li.textContent=film;
        ul.appendChild(li);
    })
}

createUser(user); //Ejecuta la funcion createUser


//Eventos
const inputName= document.getElementById('nombre');
const userName= document.getElementById('userName');

// inputName.addEventListener('input', e => {
//     console.log(e.target.value);
//     userName.textContent= e.target.value;
// })

const btnName= document.getElementById('btnName');

btnName.addEventListener('click', () => {
    userName.textContent= inputName.value; 
})

const CARD_SECTION= document.getElementById('profiles');

/////////////////////////////////////////////////////////////////////////////////////////

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        user_description: 'Me gustan los conejos',
        user_age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        user_description: 'Me gusta el calor',
        user_age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

/**
 * Obtener informacion
 * Crear un container para cada perfil clase=profile
 * Crear elemento para user name
 * Crear elemento para descripcion
 * Crear elemento para edad
 * Crear elemento para imprimir la lista de bandas --> iterar por cada banda
 */

// Creacion de tarjeta
const createCard= () => {
    const card= document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}

// Creacion de elementos
const createDescription =() => {
    const userElements={
        user_name: document.createElement('h2'),
        user_age: document.createElement('h3'),
        user_description: document.createElement('p'),
        bands: [],
    }
    return userElements;
}

const populateElements= (user, userElements) => {
    userElements.user_name.textContent= user.user_name;
    userElements.user_age.textContent= user.user_age;
    userElements.user_description.textContent= user.user_description;

    const bandList= user.fav_music.bands.map(e => {
        const pElement= document.createElement('p');
        pElement.textContent= e;
        return pElement;
    })

    userElements.bands= bandList;
    return userElements;
}

const renderElements= (card, elements) => {
    card.append(elements.user_name, elements.user_age, elements.user_description);
}

users.forEach(user => {
    const card= createCard();
    const userElements= createDescription();

    const elementsWithData= populateElements(user, userElements);
    renderElements(card, elementsWithData) 
    CARD_SECTION.append(card);
})

//EJERCICIO
/**
 * 1. Agregar las bandas
 * FUNCION PUSH PARA ARRAYS, INPUT PARA NOMBRE, EDAD Y DESCRIPCION
 * EN EL EJERCICIO DE INPUTS EVITAR LAS BANDAS
 * 2. Obtener la info del usuario desde inputs y mosgtrar en targets
 * Al menos tener 2 commits en el historial
 */ 