import Product from './Product';
import Form from './Form';


function productsBuilder(productList){
    return productList.map((product) => Product(product)).join(' ');
}

export default function Content(state){
    var products;

    if(state.filter === 'books'){
        products = state.books;
    }
    else if(state.filter === 'albums'){
        products = state.albums;
    }
    else{
        products = state.books.concat(state.albums);
    }

    return `
        <div id ="content">
          <div>
            ${productsBuilder(products)}
          </div>
          ${Form()}
        </div>
    `;
}

