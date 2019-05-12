
const states = {
    'home': {

        'title': 'welcome to your home'
    },
    'contact': {

        'title': 'Contact Me'
    },
    'portfolio': {
        'title': 'welcome to my portfolio'
    },

    'about': {
        'title': 'About me'
    }
};

const root = document.querySelector('#root');
function render(state){
    root.innerHTML =`
    ${Navigation(state)},
    ${Header(state)},
    ${Content(state)},
    ${Footer(state)},
    `;
}

render(states.home);
const links = document.querySelectorAll('nav a');
const button = document.getElementById('button');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        render(states.$event.target.textContent);
    });
});

button.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        render(states.$event.target.textContent);
    });
});