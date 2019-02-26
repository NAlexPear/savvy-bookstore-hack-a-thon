var root = document.querySelector('#root');
// image we have four compnets that we have from source directory 
// use these components to overright inner html of root element 
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
};