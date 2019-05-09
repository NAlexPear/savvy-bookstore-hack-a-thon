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

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.textContent);
        render(states.$event.target.textContent);
    });
});