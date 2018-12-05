var root = document.querySelector("#root")

function render(state) {
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
}