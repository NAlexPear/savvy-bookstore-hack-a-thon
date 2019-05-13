import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Form from '/components/Form';
import Book from '/components/Books';
import Footer from './components/Footer';
const root = document.querySelector('#root');
function render(state){
    root.innerHTML =`
    ${Navigation(state)},
    ${Header(state)},
    ${Content(state)},
    ${Footer(state)},
    `;
}
