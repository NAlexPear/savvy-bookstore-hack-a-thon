function render(state){

documewnt.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
${Content(state)}
${Footer(state)}
`;
}
