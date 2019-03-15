import Product from './Product';
import Form from './Form';


function productsBuilder(productList){
    return productList.map((product) => Product(product)).join(' ');
}

export default function Content(state){
    var products = state.filter
        ? state[state.filter]
        : state.books.concat(state.albums);

    return `
        <div id ="content">
          <div>
            ${productsBuilder(products)}
          </div>
          ${Form()}
        </div>
    `;
}

