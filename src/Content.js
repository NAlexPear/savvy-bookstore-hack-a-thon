import Product from './Product';
import Form from './Form';


function productsBuilder(productList){
    return productList.map((product) => Product(product)).join(' ');
}

export default function Content(state){
    return `
        <div id ="content">
          <div>
            ${productsBuilder(state.books)}
          </div>
          ${Form()}
        </div>
    `;
}

