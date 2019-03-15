import Product from './Product';
import Form from './Form';


function productsBuilder(productList){
    return productList.map((product) => Product(product)).join(' ');
}

export default function Content(state){
    var products = state.filter;

    if(products === 'books'){
        return `
        <div id ="content">
          <div>
            ${productsBuilder(state.books)}
          </div>
          ${Form()}
        </div>
    `;
    }
    else if(products === 'albums'){
        return `
        <div id ="content">
          <div>
            ${productsBuilder(state.albums)}
          </div>
          ${Form()}
        </div>
    `;
    }
    
    return `
        <div id ="content">
          <div>
            ${productsBuilder(state.albums)}
            ${productsBuilder(state.books)}
          </div>
          ${Form()}
        </div>
    `;
}

