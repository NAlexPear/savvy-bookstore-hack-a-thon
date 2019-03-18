function sellingPoints(points){
    return points.map((point) => `<li>${point}</li>`).join(' ');
}

export default function Product(product){
    return `
      <div>
          <i class="fas fa-trash-alt"></i>
          <h1>${product.title}</h1> 
          <h2>${product.creator}</h2>
          <h3>${product.price}</h3>
          <a href=""><img src="${product.image}" alt="${product.title}"></a>
          <ul>
              <p>Selling Points:</p>
              ${sellingPoints(product.selling_points)}
          </ul>
      </div>
  `;
}
