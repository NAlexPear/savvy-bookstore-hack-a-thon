import product from './product';
import Form from './Form';


function productsBuilder(productList){
    return productList.map((product) => product(product)).join(' ');
}

export default function Content(state){
    return `
        <div id ="content">
          <div>
            ${productsBuilder(state.products)}
          </div>
          ${Form()}
        </div>
    `;
}

