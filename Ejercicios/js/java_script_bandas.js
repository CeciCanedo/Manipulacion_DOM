// Creacion del perfil del usuario
const user ={
}
function createUser(user){
    document.getElementById('userName').textContent= user.Name;
    document.getElementById('userAge').textContent= user.Age;
    document.getElementById('userDescription').textContent= user.Description;
}
createUser(user); //Ejecuta la funcion createUser

const CARD_SECTION= document.getElementById('profiles');

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
//Rellenar tarjetas con elementos
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
// Mostrar las tarjetas con los elementos
const renderElements= (card, elements) => {
    card.append(elements.user_name, elements.user_age, elements.user_description);
//Ciclo forEach para cada banda
    elements.bands.forEach(band =>{
        card.append(band);
    })
}
// Ciclo forEach para cada tarjeta
users.forEach(user => {
    const card= createCard();
    const userElements= createDescription();

    const elementsWithData= populateElements(user, userElements);
    renderElements(card, elementsWithData) 
    CARD_SECTION.append(card);
})